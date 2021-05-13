import {
    FETCH_FOR_LIST,SAVE_USER_RECIPIENT_TO_STATE, DELETE_USER_RECIPIENT_FROM_STATE

} from '../../action-types/users-actionTypes'

export const fetchForList = (id, token) => {
    return {
        type: FETCH_FOR_LIST,
        id,
        token
    }
};
export const saveUserToState = (id, name) => {
    return {
        type: SAVE_USER_RECIPIENT_TO_STATE,
        id,
        name
    }
};
export const deleteUserFromState = () => {
    return {
        type: DELETE_USER_RECIPIENT_FROM_STATE,

    }
};
