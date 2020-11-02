import {SEND_MESSAGE, GET_MESSAGES, SAVE_NEW_PRIVATE_MSG} from '../../action-types/messages-actionTypes'


export const sendMessage = (socket, userRecipientId, userRecipientName, msg, senderId, senderName) => {
    return {
        type: SEND_MESSAGE,
        socket, userRecipientId, userRecipientName, msg, senderId, senderName
    }
};
export const getMessages = (id, token) => {
    return {
        type: GET_MESSAGES,
        id,
        token
    }
};
export const saveNewPrivateMsg = (userRecipientId, userRecipientName, msg, senderId, senderName) => {
    return {
        type: SAVE_NEW_PRIVATE_MSG,
        userRecipientId, userRecipientName, msg, senderId, senderName
    }
};




