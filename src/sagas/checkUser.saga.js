import { put, call } from 'redux-saga/effects';
import UserCheck from '../services/userCheck.service'

import {SUCCESS_USER_CHECK, ERROR_USER_CHECK} from '../action-types/checkUser-actionTypes';
const {checkUser} = UserCheck;
export function* userCheckSaga(actions) {

    try {
        console.log(actions);
        const response = yield call(checkUser, actions);
        console.log(response);
        yield put({ type: SUCCESS_USER_CHECK, response });


    } catch(error) {
        const Error = error.response;
        yield put({ type: ERROR_USER_CHECK, Error });
    }
}

