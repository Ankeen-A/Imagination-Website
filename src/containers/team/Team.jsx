import React from 'react';
import './team.css';
import img_team_banner from '../../assets/img_team_banner.jpg';
import Profile from '../../assets/Profile.png';

const Team = () => {
  return (
    <div className='team-body'>

      <div className= 'banner'>
        <img className='banner-img' src={img_team_banner} alt="logo" />
        <div className= 'banner-title'>
          <p1>Meet Our Team</p1>
        </div>
      </div>

      <div className='grid'>

        <div className='box'>
          <img className='profile' src={Profile} alt="logo" />
          <div className='text'>
            <p1 className='name'> First-Name Last-Name <br/></p1>
            <p1 className='description'> Position <br/> Information <br/> Information</p1>
          </div>
        </div>

        <div className='box'>
          <img className='profile' src={Profile} alt="logo" />
          <div className='text'>
            <p1 className='name'> First-Name Last-Name <br/></p1>
            <p1 className='description'> Position <br/> Information <br/> Information</p1>
          </div>
        </div>

        <div className='box'>
          <img className='profile' src={Profile} alt="logo" />
          <div className='text'>
            <p1 className='name'> First-Name Last-Name <br/></p1>
            <p1 className='description'> Position <br/> Information <br/> Information</p1>
          </div>
        </div>

        <div className='box'>
          <img className='profile' src={Profile} alt="logo" />
          <div className='text'>
            <p1 className='name'> First-Name Last-Name <br/></p1>
            <p1 className='description'> Position <br/> Information <br/> Information</p1>
          </div>
        </div>

        <div className='box'>
          <img className='profile' src={Profile} alt="logo" />
          <div className='text'>
            <p1 className='name'> First-Name Last-Name <br/></p1>
            <p1 className='description'> Position <br/> Information <br/> Information</p1>
          </div>
        </div>
          
        </div>
      </div>

  )
}

export default Team