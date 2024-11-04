
import { useState } from 'react'
import '../index.css'

const StarshipList = (props) => {
    return (
      <div className="starship-list">
      {props.starships.map((starship, index) => {
        return (
        <div key={index} className='card'>
          <p>Name: {starship.name}</p>
          <p>Model: {starship.model}</p>
          <p>Credits: {starship.cost_in_credits}</p>
        </div>
      )})}
</div>
    )
  }
export default StarshipList