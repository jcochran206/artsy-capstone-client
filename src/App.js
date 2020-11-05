import './App.css';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SignIn from './components/SignIn'
import Profile from './components/profile/Profile'
import Feed from './components/Feed';
import Search from './components/Search'
import Nav from './components/Nav'
import UploadPost from './components/UploadPost'

function App() {
    return (
        <div className="App">
            <Route path='/search' render={r => <Nav {...r} />} />
            <Switch>
                <Route exact path='/' render={r => <LandingPage {...r} />} />
                <Route exact path='/login' render={r => <SignIn {...r} />} />
                <Route path='/profile/:id' render={r => <Profile {...r} />} />
                <Route path='/feed/:id' render={r => <Feed {...r} />} />
                <Route path='/search' render={r => <Search {...r} />} />
                <Route exact path='/upload' render={r => <UploadPost {...r}/>} />
            </Switch>
        </div>
    );
}

export default App;
