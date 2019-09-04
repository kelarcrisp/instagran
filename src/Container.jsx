import React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

function Container() {
  var containerStyles = {
    width: "935px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "30px"
  }

  return (
    <div style={containerStyles}>
      <Post />

    </div>
  );
}

export default Container;