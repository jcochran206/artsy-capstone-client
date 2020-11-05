import { useState } from 'react'

const UserContext = React.createContext({
    userid: null,
    username: '',
    updateUser: () => {},
})

export default UserContext


export function UserProvider(props) {

    const [user, setUser] = useState({
        userid: null,
        username: '',
    })

    const updateUser = (userid, username) => {
        setUser({
            ...user, 
            userid,
            username,
        })
    }


} 