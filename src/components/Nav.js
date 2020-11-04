import { Link } from 'react-router-dom'

export default function Nav(){

    const handleLogoutClick = () => {

    }

    return(
        //map over list and change selected to whichever is clicked
        <nav className="nav" role="navigation">
        <ul>
            <li><span className="logo">Artsy</span></li>
            <li className= "selected"><Link to=''>Home</Link></li>
            <li className= ""><Link to='/feed/explore'>Explore</Link></li>
            <li className= ""><Link to=''>Post</Link></li>
            <li className= ""><Link to=''>Profile</Link></li>
            <li className= ""><Link to='/search'>Search</Link></li> 
            <li className= ""><Link to='/' onClick={handleLogoutClick}>Logout</Link></li>
        </ul>
    </nav>
    )
}