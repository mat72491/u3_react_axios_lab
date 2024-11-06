
import { useState } from 'react'
import '../index.css'

import { Link } from 'react-router-dom';

const VehiclesList = ({ vehicles }) => {
  return (
    <div className="starship-list">
      {vehicles.map((vehicle, index) => (
        <div key={index} className="card">
          <Link to={`/vehicles/${index}`}>
            <p>{vehicle.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VehiclesList;