import {REGISTER_IS_SUCCESS} from '../action-types/registration-actionTypes'


export const registrationRedux = (state = [], action) => {
    switch (action.type) {
        case REGISTER_IS_SUCCESS:
            return {
                ...state,
                isRegister:action.res.data.success
            };

        default :
            return state
    }
}