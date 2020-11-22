import { useEffect, useState } from 'react'
import UserService from '../../services/user-service'
import ApiService from '../../services/api-service'


export default function ProfileAltEdit(props) {
    const userId = props.match.params.userId

    const [form, setForm] = useState({
        username: '',
        bio: '',
        email: '',
        pwd: '',
    })
    const [error, setError] = useState(null)

    useEffect(() => {
        return ApiService.getProfileInfo(userId)
            .then(res => {
                setForm({
                    username: res.username,
                    bio: res.bio,
                    email: res.email,
                    pwd: res.pwd,
                })
            })
    }, [userId, setForm])

    const {
        username,
        bio,
        email,
        pwd,
    } = form

    const updateForm = e => {
        e.preventDefault()
        const {id, value} = e.target

        setForm({...form, [id]: value})
    }

    const submitProfileUpdate = e => {
        e.preventDefault()

        UserService.updateUser(userId, {
            username: username,
            bio: bio,
            email: email,
            pwd: pwd,
        })
            .then(user => {
                UserService.updateUsername(user.username)
                setForm({})
                setError(null)
                return props.history.push(`/profile/${user.username}`)
            })
            .catch(res => {
                setError(res.error)
            })
    }

    const cancel = () => {
        return props.history.goBack()
    }

    return(
        <main>
            <div className="signin edit__profile">
                <h1>Update Profile</h1>
                {error && <p className='error'>{error}</p>}
                <form onSubmit={e => submitProfileUpdate(e)}>
                    { username !== 'demo'
                        ?   <div className="inputgroup">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" className="input input--title" 
                                    value={username} 
                                    onChange={e => updateForm(e)} 
                                    required />
                            </div>
                        :   null
                    }
                    <div className="inputgroup">
                        <label htmlFor="bio">Bio</label>
                        <textarea type="text" rows="4" id="bio" className="input" 
                            value={bio} 
                            onChange={(e) => updateForm(e)} />
                    </div>
                    <div className="inputgroup">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="input" 
                            value={email} 
                            onChange={e => updateForm(e)} 
                            required />
                    </div>
                    <div className="input__actions">
                        <div className="button" role="button" onClick={() => cancel()}>Cancel</div>
                        <input type='submit' className="button" value='Update' />
                    </div>
                </form>
            </div>
        </main>
    )
}
