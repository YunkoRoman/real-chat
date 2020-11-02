import {fork, all} from 'redux-saga/effects';
import {watchAuthUser, watchUserCheck, watchChat, watchUser, watchRegistrationUser} from './watchers';

export default function* startForman() {
    yield all([fork(watchAuthUser),
    fork(watchUserCheck),
    fork(watchChat),
    fork(watchUser),
    fork(watchRegistrationUser)
])


}