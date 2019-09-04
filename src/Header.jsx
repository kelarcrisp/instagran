import React from 'react';
import { Link } from 'react-router-dom';

import bestWife from './assets/images/bestWife.png';
import Logo from "./Logo";







function Header() {
  return (
    <div>
      <h3>jschneidereit</h3>

      <Logo />
      <img id="photo" src={bestWife} />

    </div>
  )
}

export default Header;