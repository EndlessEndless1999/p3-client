import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isHighScoresPage = location.pathname === '/high-scores';
  const isSettingsPage = location.pathname === '/settings';
  const isHelpPage = location.pathname === '/help';
  const isAboutPage = location.pathname === '/about';
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  return (
    <>
      <nav className={`NavBar ${isHomePage ? 'hidden' : ''} ${isHighScoresPage || isSettingsPage || isHelpPage || isAboutPage || isLoginPage || isRegisterPage ? 'fixed' : ''}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/game">Play</NavLink>
        <NavLink to="/high-scores">High Scores</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/help">Help</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/Register">Register</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
