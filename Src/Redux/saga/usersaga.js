import { call, put, delay } from 'redux-saga/effects';
import * as types from '../Action/ActionConstants';
import * as SeasonalWorker from '../services/index';

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

export function* getList(action) {
    try {
        const responseData = yield call(SeasonalWorker.getSeasonalWorkerList, action.data);
            yield put({ type: types.CURRENCY_LIST_RESPONSE, data: responseData });        
    } catch (error) {
        console.log(" error in get seasonal worker saga . " + error)
    }
}