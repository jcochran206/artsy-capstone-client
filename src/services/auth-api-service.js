import config from '../config'

const AuthApiService = {
    postLogin(credentials) {
        return fetch(`${config.API_ENDPOINT}/api/auth/login`, {
            method: 'POST',
            mode: 'no-cors', // per: https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api#cross-origin_requests
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/api/users`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })

    },
}

export default AuthApiService