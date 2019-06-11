const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR': 
        console.warn('LOGIN ERROR!!!');
        return {
            ...state,
            authError: 'Login failed'
        }
        case 'LOGIN_SUCCESS':
            console.log('%c LOGIN SUCCESS!', 'background: #222; color: #bd5');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS' :
                console.log('%c SIGNOUT SUCCESS!', 'background: #222; color: #1fc');
        case 'SIGNUP_SUCCESS' :
                console.log('%c SIGNUP_SUCCESS !', 'background: #222; color: #1fc');
                return {
                    ...state,
                    authError: null
                }
        case 'SIGNUP_ERROR' :
                console.log('%c SIGNUP_ERROR !', 'background: #222; color: #1fc');
                return {
                    ...state,
                    authError: action.err.message
                }
        default:
            return state;
    }
}

export default authReducer;