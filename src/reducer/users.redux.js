import {
    USERS_LISTS_HAS_LOADED,
    SAVE_USER_RECIPIENT,
    ERROR_LOAD_LIST,
    DELETE_USER_RECIPIENT_FROM_STATE
} from '../action-types/users-actionTypes'


export const userReducer = (state = [], action) => {
    switch (action.type) {
        case USERS_LISTS_HAS_LOADED:
            return {
                ...state,
                list: action.res
            };

        case SAVE_USER_RECIPIENT:

            return {
                ...state,
                recipientUser: {
                    id: action.res.id,
                    name: action.res.name
                }
            };

        case ERROR_LOAD_LIST:
            return {
                loadingError: action.Error.data,
                errorStatus: action.Error.status
            };

        case  DELETE_USER_RECIPIENT_FROM_STATE:
            return {
                ...state,
                recipientUser: null
            };
        default :
            return state

    }
};

