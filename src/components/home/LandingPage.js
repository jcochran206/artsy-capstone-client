import { Link } from 'react-router-dom'

export default function LandingPage(){
    return(
        <>
            <nav role="navigation">
                <ul className="nav__links">
                    <li aria-label="About"><Link to='/'><span className="logo--solo">artsy</span></Link></li>
                </ul>
            </nav>

            <main role="main" className="landingpage">
                <h2 className="artsy">Join our community</h2>
                <br />
                <p><b>Artsy</b> is a forum by artists and for artists, to share artwork and ideas with friends and the wider community.</p><br />
                <p>Think of it as an instagram dedicated to solely to the pursuit of art.</p><br />
                <p>Sign up to be inspired... and to share your own artwork, too!</p>
                <div className="landingpage__action">
                    <Link to='/login' className="button">Login to begin</Link>
                </div>
            </main>
</>
    )
}