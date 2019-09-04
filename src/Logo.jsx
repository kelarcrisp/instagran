import React from 'react';
import { Link } from 'react-router-dom';
import jimPic from './assets/images/logo.png';




function Logo() {
  var getStyle = {
    width: "32px",
    marginRight: "20px"
  }


  return (
    <Link to="/profile"><img style={getStyle} src={jimPic} /></Link>
  );
}

export default Logo;