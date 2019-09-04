import React from 'react';
import { Link } from 'react-router-dom';
import instaLogo from './assets/images/instaLogo.png';
import image1 from './assets/images/image1.png';
import image2 from './assets/images/image2.png';
import image3 from './assets/images/image3.png';
function NavBar() {




  var logoStyles = {
    height: "45px"
  }
  var search = {
    height: "25px",
    width: "150px",
    marginRight: "200px",
    marginLeft: "200px",
    marginBottom: "20px"

  }

  var bottomBorder = {
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "#ebe6e0"
  }

  return (
    <div style={bottomBorder}>


      <Link to="/"> <img style={logoStyles} src={instaLogo} /></Link>
      <input style={search}
        type="text"
        placeholder="Search" />
      <img src={image1} />
      <img src={image2} />
      <img src={image3} />


    </div >

  )
}



export default NavBar;