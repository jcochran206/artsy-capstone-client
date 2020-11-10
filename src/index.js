import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import UserState from './components/context/UserState'

ReactDOM.render(
    <BrowserRouter>
        <UserState>
            <App />   
        </UserState>
    </BrowserRouter>,
    document.getElementById('root')
);

