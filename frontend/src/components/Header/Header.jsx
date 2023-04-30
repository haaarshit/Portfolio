import React from 'react'

import Person2Icon from '@mui/icons-material/Person2';
import { Link } from 'react-router-dom';
function Header() {

  const OpenNav = () => {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "100%";
  }
  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.height= "100%";
    setTimeout(() => {
      
      document.getElementById("myNav").style.height= "0%";
    }, 1000);
  }
  return (

    <>
      <div id="myNav" className="overlay">
        <Link style={{ cursor: "pointer"  ,fontSize: "30px"}} className="closebtn navlink" onClick={closeNav}>&times;</Link>
        <div className="overlay-content">
          <Link to="/" className='navlink' onClick={closeNav}>Home</Link>
          <Link to="/about" className='navlink' onClick={closeNav}>About</Link>
          <Link to="/projects" className='navlink' onClick={closeNav}>Projects</Link>
          <Link to="/contact" className='navlink' onClick={closeNav}>Contact</Link>
          <Link to="/login" className='navlink' onClick={closeNav}><Person2Icon/></Link>
        </div>
      </div>
      <span style={{ fontSize: "30px", cursor: "pointer",color:"" }} className="openbtn" onClick={OpenNav}>&#9776;</span>
    </>

  )

}

export default Header
