import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../ContactMe/Contact';
import Profile from '../Home/Profile';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Timeline from '../Timeline/Timeline';
import './NavBar.css'

export default function NavBar() {
  return (
  <> 
  <BrowserRouter>
  <div className='nav-box'>
  <nav className="navbar navbar-expand-lg   container">
  <Link to='/home' className="navbar-brand nav-logo " >My Portfolio</Link>
  <button className="navbar-toggler navbtn-toggle" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon text-dark"><i className="fa-solid fa-bars nav-icon"></i></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item ">
        <Link to='/home' className="nav-link" >Home</Link>
      </li>
      <li className="nav-item">
        <Link to='/about' className="nav-link" >About</Link>
      </li>
      <li className="nav-item">
        <Link to='/skill' className="nav-link">Skills</Link>
      </li>
      <li className="nav-item">
        <Link to='/project' className="nav-link" >Projects</Link>
      </li>
      <li className="nav-item">
        <Link to='/timeline' className="nav-link" >Timeline</Link>
      </li>
      <li className="nav-item">
        <Link to='/contact' className="nav-link" >Contact</Link>
      </li>
    </ul>
  </div>
</nav>


</div>
<div>
<Routes>
  <Route path='/home' element={<Profile/>}></Route>
  <Route path='/about' element={<AboutMe/>}></Route>
  <Route path='/skill' element={<Skills/>}></Route>
  <Route path='/project' element={<Projects/>}></Route>
  <Route path='/timeline' element={<Timeline/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
</Routes>
</div>
</BrowserRouter>
  </>
  )
}
