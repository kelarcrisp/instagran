import React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';




function Container() {
  var containerStyles = {
    width: "935px",
    margin: "auto"
  }

  return (
    <div style={containerStyles}>
      <Post />

    </div>
  );
}

export default Container;