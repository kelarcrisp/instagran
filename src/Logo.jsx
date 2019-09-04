import React from 'react';
import { Link } from 'react-router-dom';
import jimPic from './assets/images/logo.png';




function Logo() {
  var getStyle = {
    width: "32px",
    marginRight: "20px"
  }


  return (
    <img style={getStyle} src={jimPic} />
  );
}

export default Logo;