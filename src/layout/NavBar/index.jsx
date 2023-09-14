import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isHighScoresPage = location.pathname === '/high-scores';
  const isHelpPage = location.pathname === '/help';
  const isAboutPage = location.pathname === '/about';
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  const isForgotPage = location.pathname === '/forgot-password';
  const isResetPage = location.pathname === '/reset-password';
  const isNotFoundPage = location.pathname === '/notfound';

  return (
    <>
      <nav className={`NavBar ${isHomePage ? 'hidden' : ''} ${isHighScoresPage || isHelpPage || isAboutPage || isLoginPage || isRegisterPage || isForgotPage || isResetPage || isNotFoundPage ? 'fixed' : ''}`}>
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
