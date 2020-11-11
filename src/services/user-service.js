
const UserService = {
    saveUser() {
        window.localStorage.setItem()
    },
    getUser() {
        return window.localStorage.getItem()
    },
    clearUser() {
        window.localStorage.removeItem()
    },

}

export default UserService