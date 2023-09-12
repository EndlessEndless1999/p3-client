import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HomeNav = () => {
  return (
    <>
      <nav>
        <NavLink to="/game">Play</NavLink>
        <NavLink to="/high-scores">High Scores</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/help">Help</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HomeNav