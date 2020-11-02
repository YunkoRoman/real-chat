import {takeEvery} from 'redux-saga/effects';
import {userCheckSaga} from './checkUser.saga'
import {AuthUser, logout} from './auth.saga'
import {sendMessage, getMessage, saveNewPrivateMessage} from './chat.saga'
import {fetchUsersList, saveRecipientId} from './user.saga'
import {registrationUser} from './registration.saga'

import {SEND_DATA_FOR_CHECK} from '../action-types/checkUser-actionTypes';
import {AUTH_IS_SENDING, LOGOUT} from '../action-types/auth-actionTypes';
import {GET_MESSAGES, SEND_MESSAGE, SAVE_NEW_PRIVATE_MSG} from '../action-types/messages-actionTypes';
import {FETCH_FOR_LIST, SAVE_USER_RECIPIENT_TO_STATE} from '../action-types/users-actionTypes';
import {DATA_IS_SENDING} from '../action-types/registration-actionTypes';


export function* watchUserCheck() {
    yield takeEvery(SEND_DATA_FOR_CHECK, userCheckSaga);

}

export function* watchAuthUser() {

    yield takeEvery(AUTH_IS_SENDING, AuthUser);
    yield takeEvery(LOGOUT, logout);
}

export function* watchChat() {
    yield takeEvery(SEND_MESSAGE, sendMessage);
    yield takeEvery(GET_MESSAGES, getMessage);
    yield takeEvery(SAVE_NEW_PRIVATE_MSG, saveNewPrivateMessage);
}

export function* watchUser() {
    yield takeEvery(FETCH_FOR_LIST, fetchUsersList);
    yield takeEvery(SAVE_USER_RECIPIENT_TO_STATE, saveRecipientId)
}
export function* watchRegistrationUser() {
    yield takeEvery(DATA_IS_SENDING, registrationUser)
}