import './App.css';
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/Utils/PrivateRoute'
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute'
import LandingPage from './components/LandingPage'
import SignIn from './components/SignIn'
import Profile from './components/Profile'
import Feed from './components/HomeFeed'
import Search from './components/Search'
import Nav from './components/Nav'

function App() {
    return (
        <div className="App">
            <PrivateRoute path={['/profile/:id', '/feed/:id', '/explore', '/search', '/about']} component={Nav} />
            <Switch>
                <PublicOnlyRoute exact path='/' component={LandingPage} />
                <PrivateRoute exact path='/' component={Feed} />
                <PublicOnlyRoute exact path='/login' component={SignIn} />
                <PrivateRoute path='/about' component={LandingPage} />
                <PrivateRoute path='/profile/:id' component={Profile} />
                <PrivateRoute path='/feed/:id' component={Feed} />
                <PrivateRoute path='/search' component={Search} />
            </Switch>
        </div>
    );
}

export default App;
