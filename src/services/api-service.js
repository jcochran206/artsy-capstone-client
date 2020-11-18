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
        return fetch(`${config.API_ENDPOINT}/api/posts/feed/${userid}`,{
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>
            (!res.ok)
            ? Promise.reject(res.body)
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
                ? Promise.reject(res.body)
                : res.json()
        )
    },
    getCommentsInPost(id){
        return fetch(`${config.API_ENDPOINT}/api/comments/post/${id}`, {
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
    PostComment(comment, post_id){
        const body = {
            desc_comment: comment,
            post_id: post_id
        }
        return fetch(`${config.API_ENDPOINT}/api/comments`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(body)
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json() 
            )
    }

}

export default ApiService