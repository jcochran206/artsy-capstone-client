import { useContext } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../context/UserContext'

export default function Nav(){
    const context = useContext(UserContext)

    // TODO: pull in actual username
    const username = context.user.username

    const handleLogoutClick = () => {
        context.clearUser()
        TokenService.clearAuthToken()
    }
    
    return(
        <nav role="navigation">
        <ul className="navlinks">
            <li><span className="logo">Artsy</span></li>
            <li className= "selected"><Link to='/feed/home'>Home</Link></li>
            <li className=""><Link to='/feed/explore'>Explore</Link></li>
            <li className=""><Link to='/upload'>Post</Link></li>
            <li className=""><Link to={`/profile/${context.user.username}`}>Profile</Link></li> {/*user will be id of user*/}
            <li className=""><Link to='/search'>Search</Link></li> 
            <li className=""><Link to='/' onClick={handleLogoutClick}>{username} Logout</Link></li>
        </ul>
    </nav>
    )
}