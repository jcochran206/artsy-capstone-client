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
    getHomeFeed(userid){
        return fetch(`${config.API_ENDPOINT}/api/posts/feed/${userid}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
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
        return fetch(`${config.API_ENDPOINT}/api/users/${userid}/posts`,{
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

}

export default ApiService