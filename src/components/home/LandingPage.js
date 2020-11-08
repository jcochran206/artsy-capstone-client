import {Link} from 'react-router-dom'

export default function LandingPage(){
    return(
        <>
    <nav className="navi" role="navigation">
        <div className="logo">Artsy</div>
            <ul className="navlinks">
                <li>Features</li>
                <li>Service</li>
                <li>Gallery</li>
                <li>About</li>
                <li>
                    <Link to='/login' className="btn">Login</Link>
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