import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {messageReducer} from './message.redux'
import {registrationRedux} from './registration.redux'
import  auth from './auth.redux'
import {userReducer} from './users.redux'
import userCheck from './checkUser.redux'
import {LOGOUT_USER} from "../action-types/auth-actionTypes";

const appReducer = combineReducers({
    form: formReducer,
    messageReducer,
    registrationRedux,
    auth,
    userReducer,
    userCheck
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_USER) {
        console.log('LOGOUT_USER');
        state = undefined;
    }
    return appReducer(state, action)
};

export default rootReducer;