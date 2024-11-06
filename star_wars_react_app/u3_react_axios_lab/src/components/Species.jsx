

import { useState } from 'react'
import '../index.css'

import { Link } from 'react-router-dom';

const SpeciesList = ({ species }) => {
  return (
    <div className="starship-list">
      {species.map((specie, index) => (
        <div key={index} className="card">
          <Link to={`/species/${index}`}>
            <p>{specie.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SpeciesList;