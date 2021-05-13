import {SUCCESS_USER_CHECK, ERROR_USER_CHECK,} from '../action-types/checkUser-actionTypes'


export default function userCheck(state = [], action) {

    switch (action.type) {
        case SUCCESS_USER_CHECK:
            console.log(action);
            return action.response;
        case ERROR_USER_CHECK:
            state = {
                checkError: action.Error.data,
                errorStatus: action.Error.status
            };
        /* falls through */
        default:
            return state
    }
}