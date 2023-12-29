// Header.js
import React from 'react';
import './Header.css';
import logo from '../imgs/Logo .svg';

export default function Header() {
  return (
    <header className="div">
        <img
          src={logo}
          className="img"
          alt="img"
        />
        <nav className="div-2">
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Menu</a>
          <a href='/'>Reservation</a>
          <a href='/'>Order Online</a>
          <a href='/'>Login</a>
        </nav>
  </header>
  );
}
