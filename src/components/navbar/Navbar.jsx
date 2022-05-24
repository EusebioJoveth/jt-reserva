import React from 'react'
import "./navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">JTreserva</span>
            <div className="navItems">
                <button className="navButton">Registro</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar