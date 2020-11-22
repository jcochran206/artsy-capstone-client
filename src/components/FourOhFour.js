import { Link } from 'react-router-dom'

export default function FourOhFour(){

    return(
        <>
        <h1>404</h1>
        <p>Oh No Something Went Wrong.</p>
        <Link className='icon--nav' to='/'>Back to home</Link>
        </>
    )
}