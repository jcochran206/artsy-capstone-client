import './App.css';
import {Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import Profile from './components/Profile'
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={r => <LandingPage {...r}/>} />
        <Route exact path='/login' render={r => <SignIn {...r}/>} />
        <Route path='/profile/:id' render={r => <Profile {...r}/>} />
        <Route path='/feed/:id' render={r => <Feed {...r} />} />
      </Switch>
    </div>
  );
}

export default App;
