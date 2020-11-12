import { Link } from 'react-router-dom'
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


export default function Nav(){

    const username = UserService.getUser('username')
    
    return(
        <nav role="navigation">
        <ul className="navlinks">
            <li><span className="logo">Artsy</span></li>
            <li aria-label="Home" className= "selected"><Link to='/feed/home'><RiHome3Line /></Link></li>
            <li aria-label="Explore" className=""><Link to='/feed/explore'><RiEyeLine /></Link></li>
            <li aria-label="Post" className=""><Link to='/upload'><RiAddCircleLine /></Link></li>
            <li aria-label="Search" className=""><Link to='/search'><RiSearchLine /></Link></li> 
            <li aria-label="Profile" className=""><Link to={`/profile/${username}`}><CgProfile /></Link></li> {/*user will be id of user*/}
        </ul>
    </nav>
    )
}