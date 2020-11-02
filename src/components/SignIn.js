import { useState } from "react"
import { Link } from 'react-router-dom'

export default function SignIn(){
const [login, set] = useState(true)


    return(
        <>
            <Link to='/'>About</Link>
            {login ? <Login set={set}/> : <Register set={set}/>}
        </>
    )
}


const Login = (props) => {
    const [form, set] = useState({}) 

    const updateForm = e => {
        e.preventDefault()
        const {id, value} = e.target

        set({...form, [id]: value})
    }

    const submitLogin = e => {
        console.log(form)

       return set({})
    }
    
    return(
        <section className="signin-form-container">
            <h1>Artsy</h1>
        <form onSubmit={e => submitLogin(e)}>
            <h3>Login</h3>
                <label htmlFor="username">Username </label>
                <input id='username' type="text" onChange={e => updateForm(e)} required/>

                <label htmlFor="password">Password </label>
                <input id='password' type="password" onChange={e => updateForm(e)} required/>

                <input type='submit' className="btn" value='Submit' />
    
        </form>
            <p>Dont have an account?</p><button className='signin-form-link' onClick={() => props.set(false)}>Register here</button> 
        </section>
    )
}

const Register = (props) => {
    const [form, setForm] = useState({})

    const updateForm = e => {
        e.preventDefault()
        const {id, value} = e.target

        setForm({...form, [id]: value})
    }

    const submitRegister = e => {
        console.log(form)

       return setForm({})
    }

    return(
        <section className="signin-form-container">
            <form onSubmit={e => submitRegister(e)} className="form-container">
                <h2>Register : Artsy </h2>

                    <label htmlFor='email'>Email: </label>
                    <input type='email' id='email' onChange={e => updateForm(e)} required/>

                    <label htmlFor="username">Username:</label>
                    <input id='username' type="text" onChange={e => updateForm(e)} required/>

                    <label htmlFor="password">Password:</label>
                    <input id='password' type="password" onChange={e => updateForm(e)} required/>

                    <label htmlFor='re-password'>Re-enter Password: </label>
                    <input id='re-password' type='password' onChange={e => updateForm(e)} required/>

                    <input type='submit' className="btn" value='Submit' />
            </form>
            <p>Already have an account?</p><button className='signin-form-link' onClick={() => props.set(true)}>Login here</button> 

        </section>
    )
}
