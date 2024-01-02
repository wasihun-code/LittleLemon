// Header.js
import React from 'react';
import './Header.css';
import logo from '../imgs/Logo .svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="div">
        <img
          src={logo}
          className="img"
          alt="img"
        />
        <nav className="div-2">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/'>Menu</Link>
          <Link to='/booking'>Reservation</Link>
          <Link to='/'>Order Online</Link>
          <Link to='/'>Login</Link>
        </nav>
  </header>
  );
}
