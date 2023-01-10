import React from 'react';
import './home.css';
import bgImg from '../../assets/img-b.jpg';


const Body = () => {
  return (
    <div className="body">
      
      {/* neuro-nodes logo to the right */}
      <div className="body-bg-img">
        <img className="bg-img" src={bgImg} alt="logo" />
      </div>

      <div className="body-title">
        <p1>What We Do</p1><p2><br/>Imagination & Creativity In Engineering</p2>
      </div>

      <div className="body-about">
        <p1>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,  
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p1>
      </div>

    </div>
  )
}

export default Body