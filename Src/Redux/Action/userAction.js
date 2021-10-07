import * as types from './ActionConstants';

export const loginRequest = data => ({ type: types.USER_REQUEST,data });
export const listRequest = data => ({ type: types.LIST_REQUEST,data });

export const getCurrencyList = (data) => ({ type: types.CURRENCY_LIST_REQUEST, data: data });

