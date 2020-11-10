import { useState } from 'react'
import UserContext from './UserContext'

export default function UserState(props){
    const [user, setUser] = useState({})
    
    const clearUser = () => {
        setUser({
            user_id: null,
            username: null
        })
    }
    const setUserInfo = (id, name) => {
        setUser({
            user_id: id,
            username: name
        })
    }


    const values = {
        user, 
        setUserInfo,
        clearUser
    }
    console.log(user)
    return(
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}