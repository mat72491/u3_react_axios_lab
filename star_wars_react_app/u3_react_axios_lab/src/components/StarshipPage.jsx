import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'


const StarshipPage = (props) => {
    const { id } = useParams()
    // const [starship, setStarship] = useState();
  
const index = Number(id)
const singleStarship = props.starships[index]
  
    if (!singleStarship) return <p>Loading starship details...</p>;
  
    return (
      <div className="starship-page">
        <h2>{singleStarship.name}</h2>
        <p>Model: {singleStarship.model}</p>
        <p>Manufacturer: {singleStarship.manufacturer}</p>
        <p>Cost in Credits: {singleStarship.cost_in_credits}</p>
        <p>Max Speed: {singleStarship.max_atmosphering_speed}</p>
        <p>Crew: {singleStarship.crew}</p>
        <p>Passengers: {singleStarship.passengers}</p>
        <p>Cargo Capacity: {singleStarship.cargo_capacity}</p>
      </div>
    );
  };
  
  export default StarshipPage;