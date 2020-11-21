import { Link } from 'react-router-dom'

export default function FourOhFour(){
    return(
        <main className="four-oh-four">
                <h1>Ooops. 404.</h1>
                <p>Oh no, something went wrong!</p>
                <Link className='signin__buttonlink' to='/'>Shall we go back home?</Link>

        </main>
    )
}