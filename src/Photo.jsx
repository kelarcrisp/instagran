import React from 'react';
import { Link } from 'react-router-dom';
import bestWife from './assets/images/bestWife.png';




function Photo() {
  var style = {
    width: "600px"
  }

  return (
    <div >
      <img style={style} src={bestWife} />
    </div>
  );
}

export default Photo;