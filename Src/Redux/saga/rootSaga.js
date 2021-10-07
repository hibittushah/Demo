import { takeLatest } from 'redux-saga/effects';

import * as types from '../Action/ActionConstants';
import * as userSaga from './usersaga';

export default function* rootSaga() {
     yield takeLatest(types.USER_REQUEST, userSaga.loginRequest);
     yield takeLatest(types.LIST_REQUEST, userSaga.listRequest);
     yield takeLatest(types.CURRENCY_LIST_REQUEST, userSaga.getList);

}  