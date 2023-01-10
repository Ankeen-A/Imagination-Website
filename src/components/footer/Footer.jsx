import React from 'react';
import './footer.css';
import logoJsoe from '../../assets/logo-jsoe.png';
import logoImagin from '../../assets/logo-imagin.jpg';


const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-logo">
      
        <a href='https://jacobsschool.ucsd.edu/' target="_blank" rel="noopener noreferrer">
          <img className="logo-jsoe" src={logoJsoe} alt="logo" />
        </a>

        <a href='https://imagination.ucsd.edu/index.html' target="_blank" rel="noopener noreferrer">
          <img className="logo-imagin" src={logoImagin} alt="logo" />
        </a>
        
      </div>

    </div>
  )
}

export default Footer