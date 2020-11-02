import {SAVE_MESSAGE_TO_STATE, MESSAGES_HAS_LOADED, ERROR_LOADING} from '../action-types/messages-actionTypes'
import initialState from './inithialState'
import {v1 as uuidv1} from 'uuid';

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_MESSAGE_TO_STATE:

            const newMsg = {
                _id: uuidv1(),
                text: action.action.msg,
                userRecipient: {
                    id: action.action.userRecipientId,
                    name: action.action.userRecipientName
                },
                userSender: {
                    id: action.action.senderId,
                    name: action.action.senderName
                },
                date: new Date
            };
            state = {
                ...state,
                messages: [...state.messages, newMsg]
            };

            break;

        case MESSAGES_HAS_LOADED:

            state = {
                ...state,
                messages: action.res.data.messages
            };
            break;
        case ERROR_LOADING:
            state = {

                loadingError: action.Error.data,
                errorStatus: action.Error.status
            }

        default:
            return state
    }
    return state
};