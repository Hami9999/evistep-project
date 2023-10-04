// in the src/services/auth/auth.js file
class AuthService {
    // our constructor
    constructor () {
        // create an object with auth details
        this.obj = {
            token: `token`,
            user: `user`,
        }
        // get the auth token from local storage
        this.token = window.localStorage.getItem(this.obj.token)
        // get the current user from local storage
        this.user = JSON.parse(window.localStorage.getItem(this.obj.user))
    }
    // check if user is authenticated
    check () {
        return !!this.token
    }
    // get the token
    token () {
        return !!this.token
    }
    // we getting the current user
    user () {
        return !!this.user
    }
    // logout the current user
    logout () {
        // unset the token and the user
        window.localStorage.removeItem(this.obj.token)
        window.localStorage.removeItem(this.obj.user)
        window.location = '/'
    }
    // login the user
    login ({ token, user }) {
        window.localStorage.setItem(this.obj.token, token)
        window.localStorage.setItem(this.obj.user, JSON.stringify(user))
        this.token = token
        this.user = user
        window.location = '/'
    }
    // set the value of the current user
    setUser (user) {
        window.localStorage.removeItem(this.obj.user)
        window.localStorage.setItem(this.obj.user, JSON.stringify(user))
        this.user = user
        location.reload()
    }
}
// export the auth service
export default new AuthService()