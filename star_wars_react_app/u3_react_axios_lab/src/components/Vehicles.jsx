import { useState } from 'react'
import '../index.CSS'

const Vehicles = (props) => {
    return(
        <div className='vehicle-list' class='card'>
            {props.vehicles.map((vehicle, index) => {
                return (
                    <ul key={index}>
                        <li>Name: {vehicle.name}</li>
                        <li>Model: {vehicle.model}</li>
                        <li>Cost: {vehicle.cost_in_credits}</li>
                    </ul>
                )
            })}
        </div>
    )
}
export default Vehicles