import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./Logo";
import PropTypes from "prop-types";

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


Header.propTypes = {
  username: PropTypes.string
};

export default Header;