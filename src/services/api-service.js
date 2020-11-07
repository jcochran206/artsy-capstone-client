import config from '../config'

const ApiService = {
    getExplorePosts(){
        return fetch(`${config.API_ENDPOINT}/api/posts`)
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default ApiService