import React from 'react';
import logoNodes from '../../assets/logo-nodes.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">

      {/* yellow top bar*/}
      <div className="navbar-topbar">
      </div>


      <div className="navbar-links">
        {/* title logo to the left */}
        <div className="navbar-links-logo-txt"> 
        <a href='/'>Tools Of Imagination<br /><div className="italics">For Engineering</div></a>
        </div>

        {/* options on the navbar */}
        <div className="navbar-links-btns">
          <p> <a href='/modules'>MODULES</a> </p>  
          <p> <a href='/action'>IN-ACTION</a> </p> 
          <p> <a href='/team'>TEAM</a> </p> 
          <p> <a href='/references'>REFERENCES</a> </p> 
        </div>

        {/* neuro-nodes logo to the right */}
        <div className="navbar-links-logo-img">
          <img className="nodes" src={logoNodes} alt="logopo" />
        </div>
      
      </div>
    </div>
  )
}

export default Navbar