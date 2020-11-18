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
   async evaluateFollow(userid, followid){
       const response = await this.showFollowing(userid)
       const following = response.filter(x => x.follower_user_id === followid)
       return following
    }
}

export default FollowService