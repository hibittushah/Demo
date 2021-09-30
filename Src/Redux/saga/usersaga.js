import { call, put, delay } from 'redux-saga/effects';
import * as types from '../Action/ActionConstants';

export function* loginRequest(action) {
    try {
        const data =action.data
        yield put({ type: types.USER_RESPONSE, data })
    } catch (error) {
    }
}


export function* listRequest(action) {
    try {
        const data =action.data
        yield put({ type: types.LIST_RESPONSE, data })
    } catch (error) {
    }
}