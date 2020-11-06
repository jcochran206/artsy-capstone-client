import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import LandingPage from './components/LandingPage';

// temp


ReactDOM.render(
    <BrowserRouter>
        <App />   
    </BrowserRouter>,
    document.getElementById('root')
);

