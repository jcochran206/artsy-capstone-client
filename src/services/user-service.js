
const UserService = {
    saveUser(info) {
        const {userid, username} = info

        window.localStorage.setItem('userid', userid)
        window.localStorage.setItem('username', username)
    },
    getUser(item) {
        return window.localStorage.getItem(item)
    },
    clearUser() {
        window.localStorage.removeItem('userid')
        window.localStorage.removeItem('username')
    },

}

export default UserService