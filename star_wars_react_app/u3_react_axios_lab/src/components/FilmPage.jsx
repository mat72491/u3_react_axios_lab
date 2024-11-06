import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'


const FilmPage = (props) => {
    const { id } = useParams()
    // const [starship, setStarship] = useState();
  
const index = Number(id)
const singleFilm = props.films[index]
  
    if (!singleFilm) return <p>Loading film details...</p>;
  
    return (
      <div className="starship-page">
        <h2>{singleFilm.name}</h2>
        <p>Episode: {singleFilm.episode_id}</p>
        <p>Director: {singleFilm.director}</p>
        <p>Producer: {singleFilm.producer}</p>
      </div>
    );
  };
  
  export default FilmPage;