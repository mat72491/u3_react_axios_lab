import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'


const PlanetsPage = (props) => {
    const { id } = useParams()
    // const [starship, setStarship] = useState();
  
const index = Number(id)
const singlePlanet = props.planets[index]
  
    if (!singlePlanet) return <p>Loading planet details...</p>;
  
    return (
      <div className="starship-page">
        <h2>{singlePlanet.name}</h2>
        <p>Population: {singlePlanet.population}</p>
        <p>Climate: {singlePlanet.climate}</p>
        <p>Terrain: {singlePlanet.terrain}</p>
      </div>
    );
  };
  
  export default PlanetsPage;