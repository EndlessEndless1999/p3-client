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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/game">Play</NavLink>
        <NavLink to="/high-scores">High Scores</NavLink>
        <NavLink to="/help">Help</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
