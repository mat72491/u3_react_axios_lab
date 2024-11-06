import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'


const CharacterPage = (props) => {
    const { id } = useParams()
    // const [starship, setStarship] = useState();
  
const index = Number(id)
const singleCharacter = props.characters[index]
  
    if (!singleCharacter) return <p>Loading character details...</p>;
  
    return (
      <div className="starship-page">
        <h2>{singleCharacter.name}</h2>
        <p>Gender: {singleCharacter.gender}</p>
        <p>Birth Year: {singleCharacter.birth_year}</p>
        <p>Height: {singleCharacter.height}</p>
        <p>Mass: {singleCharacter.mass}</p>
      </div>
    );
  };
  
  export default CharacterPage;