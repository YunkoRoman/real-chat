import { put, call } from 'redux-saga/effects';
import RegistrationService from '../services/registration.service'
import {REGISTER_IS_SUCCESS} from '../action-types/registration-actionTypes'

const {sendRegisterDatas} = RegistrationService;
export function* registrationUser (action) {

    try {

        const res = yield call(sendRegisterDatas, action.form);
        yield put({type: REGISTER_IS_SUCCESS, res })

    } catch(error) {
        console.log(error);

    }
}

