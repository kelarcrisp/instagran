import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./Logo";

function Header(props) {
  var headerStyles = {
    padding: "10px"
  }

  var usernameStyles = {
    fontFamily: "sans-serif"
  }

  return (
    <div style={headerStyles}>
      <Logo />
      <span style={usernameStyles}>{props.username}</span>

    </div>
  )
}

export default Header;