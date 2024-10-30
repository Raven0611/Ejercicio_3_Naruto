import React from 'react';
import "./Header.css";

import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header>
      <img id='image-movie' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1200px-Naruto_logo.svg.png" alt="" />

      <NavBar />
    </header>
  )
}

export default Header