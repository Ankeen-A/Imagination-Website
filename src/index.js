import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// after installing react dom through npm install react-router-dom@6
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>, 
document.getElementById('root'));


