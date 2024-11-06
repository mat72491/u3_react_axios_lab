
import { useState } from 'react'
import '../index.css'

import { Link } from 'react-router-dom';

const Planets = ({ planets }) => {
  return (
    <div className="starship-list">
      {planets.map((planet, index) => (
        <div key={index} className="card">
          <Link to={`/planets/${index}`}>
            <p>{planet.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Planets;