const initState = {
    authError: null
}

const AuthReducer = (state = initState, action) => {

    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log("login error")
            return {
                ...state,
                authError: 'Login Failed'
            }

        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }

        case 'LOGOUT_ERROR':
            console.log("logot error")
            return {
                ...state,
                authError: 'Logout Failed'
            }

        case 'LOGOUT_SUCCESS':
            console.log('logout success')
            return {
                ...state,
                authError: null
            }

            case 'SIGNUP_ERROR':
                console.log("signup error")
                return {
                    ...state,
                    authError: action.err.message
                }
    
            case 'SIGNUP_SUCCESS':
                console.log('signup success')
                return {
                    ...state,
                    authError: null
                }
        default:
            return state;
    }
}

export default AuthReducer;