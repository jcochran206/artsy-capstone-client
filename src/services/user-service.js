import config from '../config'
import TokenService from './token-service'

const UserService = {
    saveUser(info) {
        const { userid, username } = info
        window.localStorage.setItem('userid', userid)
        window.localStorage.setItem('username', username)
    },
    updateUsername(name){
        window.localStorage.setItem('username', name)
    },
    getUser(item) {
        return window.localStorage.getItem(item)
    },
    clearUser() {
        window.localStorage.removeItem('userid')
        window.localStorage.removeItem('username')
    },
    followUser(userid) {
        return fetch(`${config.API_ENDPOINT}/`)
    },
    updateUser(userid, update) {
        return fetch(`${config.API_ENDPOINT}/api/users/${userid}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(update)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getUserWithUserId(userid) {
        // for getting (limited) info of other users' profiles
        return fetch(`${config.API_ENDPOINT}/api/users/${userid}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
            .then(res => (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    getUserIdrWithUsername(username) {
        return fetch(`${config.API_ENDPOINT}/api/users`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            ).then(resJson => {
                return resJson.find(x => x.username === username)
            })
    }
}

export default UserService