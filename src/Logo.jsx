import React from 'react';
import { Link } from 'react-router-dom';
import jimPic from './assets/images/logo.png';




function Logo() {
  var getStyle = {
    width: "100px"
  }


  return (
    <div >
      <img style={getStyle} src={jimPic} />
    </div>
  );
}

export default Logo;