import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HomeNav = () => {
  return (
    <>
      <nav>
        <NavLink to="/play">Play</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HomeNav