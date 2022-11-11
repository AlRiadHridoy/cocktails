import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              about
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar


