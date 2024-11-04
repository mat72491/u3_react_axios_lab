import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import React from 'react'
import Nav from './components/Nav'
import axios from 'axios'
import { BASE_URL } from './globals'
import StarshipList from './components/StarshipList'

function App() {
const [starships, setStarships] = useState([])

useEffect(() => {
  const getStarships = async () => {
    const response = await axios.get(`${BASE_URL}`)
    console.log(response.data.results)
    setStarships(response.data.results)
 }
  getStarships()
}, [])
  

  return (
    <>
      <div className="App"></div>
      <Nav />
      <h1>Welcome to Starships!</h1>
      <StarshipList starships={starships} />
    </>
  )
}

export default App
