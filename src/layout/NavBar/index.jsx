import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const isHighScoresPage = location.pathname === '/high-scores';
  const isHelpPage = location.pathname === '/help';

  return (
    <>
      <nav className={`NavBar ${isHomePage ? 'hidden' : ''} ${isAboutPage || isHighScoresPage || isHelpPage ? 'fixed' : ''}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/game">Play</NavLink>
        <NavLink to="/high-scores">High Scores</NavLink>
        <NavLink to="/help">Help</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
