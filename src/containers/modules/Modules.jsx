import React from 'react';
import './modules.css';
import imgA from '../../assets/img-a.jpg';
import imgC from '../../assets/img-c.jpg';
import imgD from '../../assets/img-d.jpg';
import imgE from '../../assets/img-e.jpg';
import imagine_apple from '../../assets/imagine_apple.gif';

const Modules = () => {
  return (
    <div className="modules-body">

      <div className='sections'>

        {/* Start of section 1 */}
        <div className="section1">

          <div className='section-text'>

            <p1 className='section-text-title'> Imagine an apple </p1>

            <p1 className='section-text-description'>
              <br/>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur.<br/>
            </p1>

            <button id='section1-view' className='section1-text-button-view'>
              View Module Slide Deck
            </button>

            <button id='section1-download' className='section1-text-button-download'>
              Download Module Files
            </button>

          </div>

          <div className='section1-img-bg'>
            <img className='section1-img' src={imagine_apple} alt="logo" />
          </div>

        </div>
        {/* End of section 1 */}

        {/* Start of section 2 */}
        <div className="section2">
          <div className='section2-img'>
            <img className='section2-img' src={imgC} alt="logo" />
          </div>

          <div className='section-text'>

            <p1 className='section-text-title'> Imagine an apple </p1>

            <p1 className='section-text-description'>
              <br/>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur.<br/>
            </p1>

            <button id='section2-view' className='section2-text-button-view'>
              View Module Slide Deck
            </button>

            <button id='section2-download' className='section2-text-button-download'>
              Download Module Files
            </button>

          </div>
        </div>
        {/* End of section 2 */}

        {/* Start of section 3 */}
        <div className="section3">

          <div className='section-text'>
            <p1>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur.
            </p1>
          </div>

          <div className='section3-img'>
            <img className='section3-img' src={imgD} alt="logo" />
          </div>

        </div>
        {/* End of section 3 */}

        {/* Start of section 4 */}
        <div className="section4">

          <div className='section4-img'>
            <img className='section4-img' src={imgE} alt="logo" />
          </div>

          <div className='section-text'>
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
        {/* End of section 4 */}

      </div>
      {/* End of sections */}

    </div>
  )
}

export default Modules