import {Link} from 'react-router-dom'

export default function LandingPage(){
    return(
        <>
    <nav className="nav" role="navigation">
        <ul className="nav__links">
            <li aria-label="About"><Link to='/about'><span className="logo">artsy</span></Link></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Team</a></li>
            <li>
                <Link to='/login' className="button">Login</Link>
            </li>
        </ul>
    </nav>

    <main role="main">
        <header className="hero-banner">
            <h1>Hero</h1>
            marketing slogan here
            register button here
        </header>

        <section className='hero-section'>
            Section 1 Call to action or more about artsy here 
        </section>

        <section className='hero-section'>
            Section 2 Services
        </section>

        <section className='hero-section'>
            Section 3 Features
        </section>

        <section className='hero-section'>
            Section 3 Gallery of artist work 
        </section>
        
        <section className='hero-section'>
            Section 4 about the team
        </section>
    </main>
</>
    )
}