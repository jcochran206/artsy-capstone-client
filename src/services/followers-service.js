import config from '../config'
import TokenService from '../services/token-service'

const FollowService = {
    //shows people that YOU FOLLOW
    showFollowing(userid){
    return fetch(`${config.API_ENDPOINT}/api/followers/following/${userid}`, {
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
    //shows people that FOLLOW YOU
    showFollowers(userid){
        return fetch(`${config.API_ENDPOINT}/api/followers/followers/${userid}`)
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
        method: 'DELETE',
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
    async isFollowingUser(userid, follower){
        const results = await fetch(`${config.API_ENDPOINT}/api/followers`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
        const followers = await results.json()

        console.log(followers)
    }
}

export default FollowService