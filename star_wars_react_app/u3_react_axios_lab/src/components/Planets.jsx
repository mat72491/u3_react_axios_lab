
import { useState } from 'react'
import '../index.css'

const Planets = (props) => {
    return (
      <div className="starship-list">
      {props.planets.map((planet, index) => {
        return (
        <div key={index} className='card'>
          <p>Name: {planet.name}</p>
          <p>Climate: {planet.climate}</p>
          <p>Population: {planet.population}</p>
        </div>
      )})}
</div>
    )
  }
export default Planets