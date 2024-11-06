import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import React from 'react'
import Nav from './components/Nav'
import axios from 'axios'
import { BASE_URL } from './globals'
import StarshipList from './components/StarshipList'
import FilmList from './components/Films'
import CharacterList from './components/Characters'
import Planets from './components/Planets'
import Species from './components/Species'
import Vehicles from './components/Vehicles'
import StarshipPage from './components/StarshipPage'

function App() {
const [starships, setStarships] = useState([])
const [films, setFilms] = useState([])
const [characters, setCharacters] = useState([])
const [planets, setPlanets] = useState([])
const [species, setSpecies] = useState([])
const [vehicles, setVehicles] = useState([])

useEffect(() => {
  const getStarships = async () => {
    const response = await axios.get(`${BASE_URL}starships`)
    setStarships(response.data.results)
 }
  getStarships()
}, [])
  
useEffect(() => {
  const getFilms = async () => {
    const response = await axios.get(`${BASE_URL}films`)
    setFilms(response.data.results)
  };
   getFilms()
}, [])

useEffect(() => {
  const getCharacters = async () => {
    const response = await axios.get(`${BASE_URL}people`)
    setCharacters(response.data.results)
  };
  getCharacters()
}, [])


useEffect(() => {
  const getPlanets = async () => {
    const response = await axios.get(`${BASE_URL}planets`)
    setPlanets(response.data.results)
  };
  getPlanets()
}, [])

useEffect(() => {
  const getSpecies = async () => {
    const response = await axios.get(`${BASE_URL}species`)
    setSpecies(response.data.results)
  }
  getSpecies()
},[])

useEffect(() => {
  const getVehicles = async () => {
    const response = await axios.get(`${BASE_URL}vehicles`)
    setVehicles(response.data.results)
  }
  getVehicles()
}, [])

  return (
    <>
      <div className="App"></div>
      <Nav />
      <h1>Welcome to Starships!</h1>
      <Routes>
      <Route path='/' element={ <h2>Home Page</h2> }></Route>
      <Route path='/starships' element={ <StarshipList starships={starships}/>}></Route>
      <Route path="/starships/:id" element={<StarshipPage starships={starships}/>} />
      <Route path='/films' element={ <FilmList films={films} /> }/>
      <Route path='films/:id' element={ <FilmPage films={films} />}/>
      <Route path='/characters' element={ <CharacterList characters={characters} />}/>
      <Route path='/planets' element={ <Planets planets={planets} />}/>
      <Route path='/species' element={ <Species species={species} />}/>
      <Route path='/vehicles' element={ <Vehicles vehicles={vehicles} />} />
      </Routes>
    </>
  )
}

export default App
