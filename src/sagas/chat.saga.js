import {put, call} from 'redux-saga/effects';

import messageSevice from '../services/message.service'
import {
    SAVE_MESSAGE_TO_STATE,
    ERROR_SEND,
    MESSAGES_HAS_LOADED,
    ERROR_LOADING
} from '../action-types/messages-actionTypes';
import {sendPrivateMessage} from "../services/socket.service";


export function* sendMessage(action) {
    try {

        yield call(
            sendPrivateMessage,
            action.socket,
            action.userRecipientId,
            action.userRecipientName,
            action.msg, action.senderId,
            action.senderName
        );

        yield put({type: SAVE_MESSAGE_TO_STATE, action})
    } catch (error) {
        yield put({type: ERROR_SEND, error});
    }
}

export function* getMessage(action) {
    const {getMessages} = messageSevice;
    try {

        const res = yield call(
            getMessages,
            action.id,
            action.token
        );
        yield put({type: MESSAGES_HAS_LOADED, res});

    } catch (error) {
        const Error = error.response;
        console.log(Error);
        yield put({type: ERROR_LOADING, Error});
    }
}

export function* saveNewPrivateMessage(action) {

    try {

        yield put({type: SAVE_MESSAGE_TO_STATE, action});

    } catch (error) {

        // yield put({type: ERROR_SEND, error});
    }
}

