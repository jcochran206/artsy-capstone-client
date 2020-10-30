import { useState } from "react"

export default function SignIn(){
const [login, set] = useState('login')

    return(
        <>
            {login === 'login' ? <Login set={set} /> : <Register set={set} />}
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
        <>
        <form onSubmit={e => submitLogin(e)} className="form-container">
            <h2>Login : Artsy </h2>
                <label htmlFor="username">Username: </label>
                <input id='username' type="text" onChange={e => updateForm(e)} required/>

                <label htmlFor="password">Password: </label>
                <input id='password' type="password" onChange={e => updateForm(e)} required/>

                <input type='submit' className="btn" value='Submit' />
    
        </form>
        <p>Dont have an account?</p><a onClick={() => props.set('register')}>Register here</a>
    </>
    )
}

const Register = (props) => {
    const [form, set] = useState({})

    const updateForm = e => {
        e.preventDefault()
        const {id, value} = e.target

        set({...form, [id]: value})
    }

    const submitRegister = e => {
        console.log(form)

       return set({})
    }

    return(
        <>
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
        <p>Already have an account?</p><a onClick={props.set('login')}>Login here</a>
        </>
    )
}
