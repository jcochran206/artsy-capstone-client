import { Link } from 'react-router-dom'

export default function Nav(props){
    const logout = () => {
        //clear json webtoken
        props.history.push('/')
    }
    return(
        <nav role="navigation">
        <ul className="navlinks">
            <li><span className="logo">Artsy</span></li>
            <li className= "selected"><Link to='/feed/home'>Home</Link></li>
            <li className=""><Link to='/feed/explore'>Explore</Link></li>
            <li className=""><Link to=''>Post</Link></li>
            <li className=""><Link to={`/profile/user`}>Profile</Link></li> {/*user will be id of user*/}
            <li className=""><Link onClick={() => logout()}>Logout</Link></li>
            <li className=""><Link to=''>Search</Link></li> 
        </ul>
    </nav>
    )
}