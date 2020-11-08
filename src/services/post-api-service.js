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
            // INSERT INTO posts (user_id, title, pic, desc_post)

        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )

    },

}

export default PostApiService