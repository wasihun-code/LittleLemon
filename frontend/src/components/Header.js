import React from 'react';

export default function Header() {
  return (
    <header>
        <img src='/public/imgs/Logo .svg' alt="Logo" />
        <nav>
            <li> <a href='/'> Home </a> </li>
            <li> <a href='/about'> About </a> </li>
            <li> <a href='/menu'> Menu </a> </li>
            <li> <a href='/reservation'> Reservation </a> </li>
            <li> <a href='/order_online'> Order Online </a> </li>
            <li> <a href='/Login'> Login </a> </li>
        </nav>
    </header>
  )
}