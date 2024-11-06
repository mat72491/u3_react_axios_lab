
import { useState } from 'react'
import '../index.css'

import { Link } from 'react-router-dom';

const StarshipList = ({ starships }) => {
  return (
    <div className="starship-list">
      {starships.map((starship, index) => (
        <div key={index} className="card">
          <Link to={`/starships/${index + 1}`}>
            <p>{starship.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default StarshipList;