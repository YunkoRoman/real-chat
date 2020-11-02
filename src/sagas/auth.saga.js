import { put, call } from 'redux-saga/effects';
import AuthService from '../services/auth.service'

import {AUTH_IS_SUCCESS,AUTH_IS_ERROR, LOGOUT_USER } from '../action-types/auth-actionTypes';
const {authUser} = AuthService;
export function* AuthUser(action) {

    try {

        const res = yield call(authUser, action.email, action.password);

        yield put({type: AUTH_IS_SUCCESS, res})

    } catch (error) {
        const Error = error.response;
        yield put({type: AUTH_IS_ERROR, Error})

    }
}
export  function* logout () {
    try {
        yield put({ type: LOGOUT_USER})

    } catch(error) {
        console.log(error);

    }
}



