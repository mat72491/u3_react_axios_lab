
import { useState } from 'react'
import '../index.css'

const CharacterList = (props) => {
    return (
      <div className="character-list">
      {props.characters.map((character, index) => {
        return (
        <div key={index} className='card'>
          <p>Name: {character.name}</p>
        </div>
      )})}
</div>
    )
  }
export default CharacterList