import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HomeNav = () => {
  return (
    <>
      <nav className="nav">
        <NavLink className="NavLink" to="/game">Play</NavLink>
        <NavLink className="NavLink" to="/high-scores">High Scores</NavLink>
        <NavLink className="NavLink" to="/help">Help</NavLink>
        <NavLink className="NavLink" to="/about">About</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HomeNav