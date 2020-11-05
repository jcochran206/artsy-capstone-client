import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'

export default function Nav(props){

    const handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    return(
        <nav role="navigation">
        <ul className="navlinks">
            <li><span className="logo">Artsy</span></li>
            <li className= "selected"><Link to='/feed/home'>Home</Link></li>
            <li className=""><Link to='/feed/explore'>Explore</Link></li>
            <li className=""><Link to='/upload'>Post</Link></li>
            <li className=""><Link to={`/profile/user`}>Profile</Link></li> {/*user will be id of user*/}
            <li className=""><Link to='/search'>Search</Link></li> 
            <li className=""><Link to='/' onClick={handleLogoutClick}>Logout</Link></li>
        </ul>
    </nav>
    )
}