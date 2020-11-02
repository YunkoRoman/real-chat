import {put, call} from 'redux-saga/effects';
import UsersService from '../services/users.service';

import {ERROR_LOAD_LIST, USERS_LISTS_HAS_LOADED, SAVE_USER_RECIPIENT} from '../action-types/users-actionTypes';


export function* fetchUsersList(action) {
    try {
        const {getUsersList} = UsersService;
        const res = yield call(
            getUsersList,
            action.id,
            action.token
        );
        yield put({type: USERS_LISTS_HAS_LOADED, res});
    } catch (error) {
        const Error = error.response;
        yield put({type: ERROR_LOAD_LIST, Error});
    }
}

export function* saveRecipientId (action) {
    try {
        const res = {id: action.id, name: action.name};

        yield put({type: SAVE_USER_RECIPIENT,res });
    } catch (error) {
        yield put({type: ERROR_LOAD_LIST, error});
    }
}

