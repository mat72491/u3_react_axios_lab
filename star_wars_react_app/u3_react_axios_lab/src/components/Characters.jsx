import { useState } from 'react'
import '../index.css'
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  return (
    <div className="starship-list">
      {characters.map((character, index) => (
        <div key={index} className="card">
          <Link to={`/characters/${index}`}>
            <p>{character.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;