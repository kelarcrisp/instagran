import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./Logo";

function Header(props) {
  var headerStyles = {
    padding: "10px"
  }

  var usernameStyles = {
    fontFamily: "sans-serif",
    fontColor: "black",

  }

  return (
    <div style={headerStyles}>
      <Logo />
      <Link to="/profile"><span style={usernameStyles}>{props.username}</span></Link>

    </div>
  )
}

export default Header;