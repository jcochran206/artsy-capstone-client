import './App.css';
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/Utils/PrivateRoute'
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute'
import LandingPage from './components/home/LandingPage'
import SignIn from './components/SignIn'
import Profile from './components/profile/Profile'
import Feed from './components/timeline/Feed';
import Search from './components/timeline/Search'
import Nav from './components/timeline/Nav'
import UploadPost from './components/post/UploadPost'
import EditPost from './components/post/EditPost'
import Home from './components/home/Home'
import PostSolo from './components/PostSolo'
import Footer from './components/Footer'


function App() {
    return (
        <div className="App">
            <PrivateRoute path={['/profile/:id', '/posts/:postId', '/feed/:id', '/explore', '/search', '/upload', '/about']} component={Nav} />
            <Switch>
                <Route exact path='/' render={r => <Home {...r} />} />
                <PublicOnlyRoute exact path='/login' component={SignIn} />
                <PrivateRoute path='/about' component={LandingPage} />
                <PrivateRoute path='/profile/:id' component={Profile} />
                <PrivateRoute path='/feed/:id' component={Feed} />
                <PrivateRoute path='/search' component={Search} />
                <PrivateRoute path='/upload' component={UploadPost} />
                <PrivateRoute path='/edit/:postId' component={EditPost} />
                <Route 
                    exact path='/posts/:postId' 
                    render={props => (
                        <PostSolo {...props} />
                    )}
                />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
