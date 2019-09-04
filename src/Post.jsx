import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Photo from './Photo';
import CommentInput from './CommentInput';




function Post() {
  var postStyles = {
    width: "600px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#ebe6e0",
    borderRadius: "5px"
  }

  return (
    <div style={postStyles}>
      <Header
        username="jschneidereit" />
      <Photo />
      <CommentInput />
    </div>
  );
}

export default Post;