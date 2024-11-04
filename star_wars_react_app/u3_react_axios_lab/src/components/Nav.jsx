
import { useState } from 'react'

const Nav = () => {
    return(
<nav className='navbar'>
    <div className='navbarLogo'>
        <a href='/'>Star Wars</a>
    </div>
    <ul className='navbar-links'>
        <li><a href='/'>Home</a></li>
        <li><a href='/starships'>Starships</a></li>
    </ul>
</nav>
    )
}

export default Nav