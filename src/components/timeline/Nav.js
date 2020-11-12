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


export default function Nav(props){

    const path = props.match.path
    const url = props.match.url // to distinguish between the two /feed/:id paths
    console.log("path: ", path)


    const username = UserService.getUser('username')
    
    return(
        <nav role="navigation">
        <ul className="navlinks">
            <li className="li--logo"><span className="logo">artsy</span></li>
            <li aria-label="Home" className={url === '/feed/home' ? "selected" : ""}><Link to='/feed/home'><RiHome3Line /></Link></li>
            <li aria-label="Explore" className={url === '/feed/explore' ? "selected" : ""}><Link to='/feed/explore'><RiEyeLine /></Link></li>
            <li aria-label="Search" className={url === '/search' ? "selected" : ""}><Link to='/search'><RiSearchLine /></Link></li> 
            <li aria-label="Post" className={url === '/upload' ? "selected" : ""}><Link to='/upload'><RiAddCircleLine /></Link></li>
            <li aria-label="Profile" className={path === '/profile/:id' ? "selected" : ""}><Link to={`/profile/${username}`}><CgProfile /></Link></li> {/*user will be id of user*/}
        </ul>
    </nav>
    )
}