import {ERROR_SEND_MSG, MSG_IS_SEND_SUCCESS, SENDING_IN_PROCCES} from '../../action-types/sendMessageTypes'
import {sendPrivateMessage} from '../../services/socket.service'

export const sendMsgIsSuccess = (msg, userRecipientId, senderId) => {
    return {
        type: MSG_IS_SEND_SUCCESS,
        msg,
        userRecipientId,
        senderId
    }
};

export const sendingInProcces = (bool) => {
    return {
        type: SENDING_IN_PROCCES,
        bool
    }
}

export const errSendMsg = (bool) => {
    return {
        type: ERROR_SEND_MSG,
        hasErrored: bool
    }
};


