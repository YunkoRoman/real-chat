import {AUTH_IS_SENDING, LOGOUT} from '../../action-types/auth-actionTypes'


export const authIsSending = (email, password) => {
    return {
        type: AUTH_IS_SENDING,
        email,
        password
    }
};

export const logout = () => {
  return {
      type: LOGOUT
  }
};




