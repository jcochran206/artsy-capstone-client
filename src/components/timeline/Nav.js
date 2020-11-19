import { Link } from 'react-router-dom'
import UserService from '../../services/user-service'

import HomeIcon from '../icons/HomeIcon'
import EyeIcon from '../icons/EyeIcon'
import AddIcon from '../icons/AddIcon'
import AvatarNavIcon from '../icons/AvatarNavIcon'


export default function Nav(props){

    const path = props.match.path
    const url = props.match.url // to distinguish between the two /feed/:id paths
    const username = UserService.getUser('username')
    
    return ( 
        <nav className="nav" role="navigation">
            <ul className="nav__links">
                <li aria-label="About" className={url === '/about' ? "selected" : ""}>
                    <Link to='/about'>
                        <span className="logo">artsy</span>
                    </Link>
                </li>
                <li aria-label="Home" className={url === '/feed/home' ? "selected" : ""}>
                    <Link to='/feed/home'>
                        <HomeIcon className='icon icon--nav' />
                    </Link>
                </li>
                <li aria-label="Explore" className={url === '/feed/explore' ? "selected" : ""}>
                    <Link to='/feed/explore'>
                        <EyeIcon className='icon icon--nav' />
                    </Link>
                </li>
                <li aria-label="Post" className={url === '/upload' ? "selected" : ""}>
                    <Link to='/upload'>
                        <AddIcon className='icon icon--nav' />
                    </Link>
                </li>
                <li aria-label="Profile" className={path === '/profile/:id' ? "selected" : ""}>
                    <Link to={`/profile/${username}`}>
                        <AvatarNavIcon username={username}className='icon icon--nav nav__avatar' />
                    </Link>
                </li> 
                {/*user (avatar) will be id of user*/}
            </ul>
        </nav>
    )
}