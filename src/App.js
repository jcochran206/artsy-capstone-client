import './App.css';
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/Utils/PrivateRoute'
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute'
import LandingPage from './components/LandingPage'
import SignIn from './components/SignIn'
import Profile from './components/profile/Profile'
import Feed from './components/Feed';
import Search from './components/Search'
import Nav from './components/Nav'
import UploadPost from './components/UploadPost'
import Home from './components/home/Home'

function App() {
    return (
        <div className="App">
            <PrivateRoute path={['/profile/:id', '/feed/:id', '/explore', '/search', '/about']} component={Nav} />
            <Switch>
                <Route exact path='/' render={r => <Home {...r} />} />
                <PublicOnlyRoute exact path='/login' component={SignIn} />
                <PrivateRoute path='/about' component={LandingPage} />
                <PrivateRoute path='/profile/:id' component={Profile} />
                <PrivateRoute path='/feed/:id' component={Feed} />
                <PrivateRoute path='/search' component={Search} />
                <PrivateRoute exact path='/upload' component={UploadPost} />
            </Switch>
        </div>
    );
}

export default App;
