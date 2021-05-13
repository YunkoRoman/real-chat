import {AUTH_IS_SUCCESS, AUTH_IS_ERROR} from '../action-types/auth-actionTypes'


export default function auth(state = [], action) {
    switch (action.type) {
        case AUTH_IS_SUCCESS:
            return {...state, result: action.res};

        case AUTH_IS_ERROR:
            return {
                ...state,
                errorStatus: action.Error.status,
                errorData: action.Error.data
            };
        default :
            return state
    }
};

