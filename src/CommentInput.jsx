import React from 'react';
import { Link } from 'react-router-dom';




function CommentInput() {
  var CommentInputStyles = {
    padding: "15px"
  }

  var postButton = {
    float: "right",
    borderWidth: "0px",
    color: "#038cfc",
    fontSize: "14px",
    fontWeight: "bold"
  }

  var textBox = {
    borderWidth: "0px",
    fontSize: "14px"
  }

  return (
    <div style={CommentInputStyles}>
      <input
        type="text"
        placeholder="Add a comment..."
        style={textBox} />
      <button style={postButton}>Post</button>
    </div>
  );
}

export default CommentInput;