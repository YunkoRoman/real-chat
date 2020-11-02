import {DATA_IS_SENDING} from '../../action-types/registration-actionTypes'


export const dataIsSending = (form) => {
    return {
        type: DATA_IS_SENDING,
        form
    }
};
