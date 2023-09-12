import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/game">Play</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar