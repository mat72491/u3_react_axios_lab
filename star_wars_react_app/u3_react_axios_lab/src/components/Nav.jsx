import { Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
    return(
<nav className='navbar'>
    <ul className='navbar-links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/starships'>Starships</Link></li>
        <li><Link to='/films'>Films</Link></li>
        <li><Link to='/characters'>Characters</Link></li>
        <li><Link to='/planets'>Planets</Link></li>
        <li><Link to='/species'>Species</Link></li>
        <li><Link to='/vehicles'>Vehicles</Link></li>
    </ul>
</nav>
    )
}

export default Nav