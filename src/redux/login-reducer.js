import { loginAPI } from "../api/api";

const LOGIN_USER = 'LOGIN_USER';

let initialState = {
    email: null,
    password: null,
    rememberMe: false
}

const loginReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state, 
                ...action.data,
                rememberMe: true
            }

        default:
            return state;
    }
}

export const setUserLogin = (email, password, rememberMe) => (
    {type: LOGIN_USER, data: {email, password, rememberMe}}
);

// export const loginUser = () => (dispatch) => {
//     loginAPI.login() 
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 let {email, password, rememberMe} = response.data.data;
//                 dispatch(setUserLogin(email, password, rememberMe));
//             } else if (response.data.resultCode === 10) {
//                 loginAPI.getCaptcha()
//                     .then(response => {

//                     })
//             }
//         })

// }

export default loginReducer;