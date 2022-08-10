import React from 'react';
import {Link} from 'react-scroll'

import './NavBar.css'

export default function NavBar() {
  return (
  <> 
  
  <div className='nav-box'>
  <nav className="navbar navbar-expand-lg   container">
  <Link activeClass="active"
      to="home"
      spy={true}
      smooth={true}
      offset={-300}
      duration={500} className="navbar-brand nav-logo text-light" >My Portfolio</Link>
  <button className="navbar-toggler navbtn-toggle" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon text-dark"><i className="fa-solid fa-bars nav-icon"></i></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item ">
        <Link activeClass="active"
      to="home"
      spy={true}
      smooth={true}
      offset={-300}
      duration={500} className="nav-link" >Home</Link>
      </li>
      <li className="nav-item">
        <Link activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      offset={-50}
      duration={500} className="nav-link" >About</Link>
      </li>
      <li className="nav-item">
        <Link activeClass="active"
      to="skills"
      spy={true}
      smooth={true}
      offset={-50}
      duration={500} className="nav-link">Skills</Link>
      </li>
      <li className="nav-item">
        <Link activeClass="active"
      to="projects"
      spy={true}
      smooth={true}
      offset={-50}
      duration={500} className="nav-link" >Projects</Link>
      </li>
      <li className="nav-item">
        <Link activeClass="active"
      to="timeline"
      spy={true}
      smooth={true}
  
      offset={-50}
      duration={500} className="nav-link" >Timeline</Link>
      </li>
      <li className="nav-item">
        <Link activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
   
      offset={-50}
      duration={500} className="nav-link" >Contact</Link>
      </li>
    </ul>
  </div>
</nav>
</div>


  </>
  )
}
