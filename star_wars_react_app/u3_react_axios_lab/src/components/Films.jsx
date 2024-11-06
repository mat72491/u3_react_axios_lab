
import { useState } from 'react'
import '../index.css'

const FilmList = (props) => {
    return (
      <div className="film-list">
      {props.films.map((film, index) => {
        return (
        <div key={index} className='card'>
          <p>Name: {film.title}</p>
          <p>Director: {film.director}</p>
          <p>Release Date: {film.release_date}</p>
        </div>
      )})}
</div>
    )
  }
export default FilmList