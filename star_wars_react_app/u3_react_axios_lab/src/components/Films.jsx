
import { useState } from 'react'
import '../index.css'
import { Link } from 'react-router-dom';

const FilmList = ({ films }) => {
  return (
    <div className="starship-list">
      {films.map((film, index) => (
        <div key={index} className="card">
          <Link to={`/films/${index}`}>
            <p>{film.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FilmList;