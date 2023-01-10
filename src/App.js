import React from 'react';
import './App.css'
import {Navbar, Footer} from './components';
import {References, Action, Team, Home, Modules} from './containers';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App"> 
          <Navbar />
          {/* whatever is outside of Routes tag will be present on all pages */}
          <Routes> 
            <Route path='/' element={<Home/>} />
            <Route path='/modules' element={<Modules/>} />
            <Route path='/action' element={<Action/>} />
            <Route path='/team' element={<Team/>} />
            <Route path='/references' element={<References/>} />
          </Routes>
          <Footer />

    </div>
  )
}

export default App