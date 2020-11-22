import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '../components/home/LandingPage';
import SignIn from '../components/home/SignIn';
import Feed from '../components/timeline/Feed';
import Footer from '../components/timeline/Footer';
import Nav from '../components/timeline/Nav';
import Profile from '../components/profile/Profile';
import Followers from '../components/profile/Followers';
import ProfileFeed from '../components/profile/ProfileFeed';
import EditProfile from '../components/profile/EditProfile'
import Post from '../components/post/Post';
import EditPost from '../components/post/EditPost';
import PostImage from '../components/post/PostImage';
import UploadPost from '../components/post/UploadPost';
import Comments from '../components/comments/Comments';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('Landing Page renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('Sign In renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <SignIn />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('Nav renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter >
      <Nav match={{"path": 1}}/>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


it('Footer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('Feed renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter >
      <Feed match={{
        "params": {
          "id": 1
        }
      }}/>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('Profile renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Profile match={{
        "params": {
          "id": 1
        }
      }}/>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('Followers renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Followers />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('ProfileFeed renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <ProfileFeed />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('EditProfile renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <EditProfile match={{
        "params": {
          "userId": 1
        }
      }}/>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('Post renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Post pic={'url'}/>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('EditPost renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(
    <MemoryRouter >
      <EditPost match={{
        "params": {
          "postId": 1
        }
      }}/>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('PostImage renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(
    <MemoryRouter >
      <PostImage pic={'url'}/>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('UploadPoast renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(
    <MemoryRouter >
      <UploadPost/>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('Comments renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(
    <MemoryRouter >
      <Comments />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


