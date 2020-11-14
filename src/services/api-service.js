import config from '../config'
import TokenService from './token-service'
const ApiService = {
    getExplorePosts(){
        return fetch(`${config.API_ENDPOINT}/api/posts`)
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getProfileInfo(userid){
        return fetch(`${config.API_ENDPOINT}/api/users/${userid}`)
                .then(res => 
                    (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                    )
    },
    getPostsInProfile(userid){
        return fetch(`${config.API_ENDPOINT}/api/posts/${userid}`,{
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>             
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    showFollowers(){
        return fetch(`${config.API_ENDPOINT}/api/followers`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    followUser(userid){
        return fetch(`${config.API_ENDPOINT}/api/followers/${userid}`, {
                method: 'POST',
                headers: {
                    'authorization': `bearer ${TokenService.getAuthToken()}`,
                }
            })
            .then(res => {
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()            
            })
    },
    unfollowUser(userid){
        return fetch(`${config.API_ENDPOINT}/api/followers/${userid}`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
        .then(res => {
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()       
        })
    }
}

export default ApiService