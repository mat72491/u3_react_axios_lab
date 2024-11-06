import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'


const VehiclesPage = (props) => {
    const { id } = useParams()
    // const [starship, setStarship] = useState();
  
const index = Number(id)
const singleVehicle = props.vehicles[index]
  
    if (!singleVehicle) return <p>Loading vehicle details...</p>;
  
    return (
      <div className="vehicles-page">
        <h2>{singleVehicle.name}</h2>
        <p>Model: {singleVehicle.model}</p>
        <p>Manufacturer: {singleVehicle.manufacturer}</p>
        <p>Pilots: {singleVehicle.pilots}</p>
      </div>
    );
  };
  
  export default VehiclesPage;