import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserService from '../../services/user-service'

import {
    RiHome3Line,
    RiHome3Fill,
    RiEyeLine,
    RiEyeFill,
    RiAddCircleLine,
    RiAddCircleFill,
    RiSearchLine,
    RiSearchFill,

} from 'react-icons/ri'

import {
    CgProfile,
} from 'react-icons/cg'

import {
    IoMdLogin,
    IoMdLogOut,
} from 'react-icons/io'



export default function Nav(){

    // TODO: pull in actual username
    const username = UserService.getUser('username')
    const handleLogoutClick = () => {
        UserService.clearUser()
        TokenService.clearAuthToken()
    }
    
    return(
        <nav role="navigation">
        <ul className="navlinks">
            <li><span className="logo">Artsy</span></li>
            <li aria-label="Home" className= "selected"><Link to='/feed/home'><RiHome3Line /></Link></li>
            <li aria-label="Explore" className=""><Link to='/feed/explore'><RiEyeLine /></Link></li>
            <li aria-label="Post" className=""><Link to='/upload'><RiAddCircleLine /></Link></li>
            <li aria-label="Profile" className=""><Link to={`/profile/${username}`}><CgProfile /></Link></li> {/*user will be id of user*/}
            <li aria-label="Search" className=""><Link to='/search'><RiSearchLine /></Link></li> 
            <li aria-label="Logout" id="logout" className=""><Link to='/' onClick={handleLogoutClick}>{username} Logout</Link></li>
            {/* <li aria-label="Logout" className=""><Link to='/' onClick={handleLogoutClick}><IoMdLogOut /></Link></li> */}
        </ul>
    </nav>
    )
}