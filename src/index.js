import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// temp
import HomeFeed from './components/HomeFeed'
import Post from './components/Post'
import PostsList from './components/PostsList'


ReactDOM.render(
    <BrowserRouter>

        {/* temp, just to see if certain components render in DOM */}
        {/* <Post /> */}
        {/* <PostsList /> */}
        {/* <HomeFeed /> */}

        <App />
        
    </BrowserRouter>,
    document.getElementById('root')
);

