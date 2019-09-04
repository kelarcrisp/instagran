import React from 'react';
import { Link } from 'react-router-dom';
import instaLogo from './assets/images/instaLogo.png';

function NavBar() {




  var usernameStyles = {
    fontFamily: "sans-serif",
    fontColor: "black",

  }

  return (
    <div >

      <img src={instaLogo} />

    </div>
  )
}



export default NavBar;