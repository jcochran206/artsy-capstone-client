import TokenService from '../services/token-service'
import config from '../config'

const PostApiService = {
    getPosts() {
        return fetch(`${config.API_ENDPOINT}/api/posts`, {
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
    getPostById(path) {
        console.log(path)
        return fetch(`${config.API_ENDPOINT}/api${path}`)
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )

    },
    postPost(title, description, image) {
        return fetch(`${config.API_ENDPOINT}/api/posts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                title: title,
                pic: image,
                desc_post: description,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )

    },
    putPost(title, description, id) {
        return fetch(`${config.API_ENDPOINT}/api/posts/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                title: title,
                desc_post: description,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )

    },
    deletePost(id) {
        return fetch(`${config.API_ENDPOINT}/api/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => {  // give an error if Web Dev Console is open. Otherwise, not.
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    }

}

export default PostApiService