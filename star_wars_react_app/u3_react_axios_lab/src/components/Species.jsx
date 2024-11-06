
import { useState } from 'react'
import '../index.css'

const Species = (props) => {
    return(
        <div className='species-list'>
            {props.species.map((specie, index) => {
                return (
                    <div key={index} className='card'>
                        <li>Name: {specie.name}</li>
                        <li>Classification: {specie.classification}</li>
                        <li>Designation: {specie.designation}</li>
                    </div>
                )
            })}
        </div>
    )
}

export default Species