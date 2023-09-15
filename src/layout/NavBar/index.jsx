import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isGamePage = location.pathname === '/game';

  return (
    <>
      <nav
        className={`NavBar ${isHomePage ? 'hidden' : ''} ${!isGamePage ? 'hovered' : ''}`}
      >
        <NavLink className="NavLink" to="/">Home</NavLink>
        <NavLink className="NavLink" to="/game">Play</NavLink>
        <NavLink className="NavLink" to="/high-scores">High Scores</NavLink>
        <NavLink className="NavLink" to="/help">Help</NavLink>
        <NavLink className="NavLink" to="/about">About</NavLink>
        <NavLink className="NavLink" to="/login">Login</NavLink>
        <NavLink className="NavLink" to="/register">Register</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
