import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'


const SpeciesPage = (props) => {
    const { id } = useParams()
    // const [starship, setStarship] = useState();
  
const index = Number(id)
const singleSpecies = props.species[index]
  
    if (!singleSpecies) return <p>Loading species details...</p>;
  
    return (
      <div className="starship-page">
        <h2>{singleSpecies.name}</h2>
        <p>Classification: {singleSpecies.classification}</p>
        <p>Designation: {singleSpecies.designation}</p>
        <p>Average Lifespan: {singleSpecies.average_lifespan}</p>
        <p>Language: {singleSpecies.language}</p>
      </div>
    );
  };
  
  export default SpeciesPage;