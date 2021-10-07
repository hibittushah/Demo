import * as types from '../Action/ActionConstants';
import createReducer from '../NetworkLib/createReducer';

export const login = createReducer({}, {
    [types.USER_RESPONSE](state, action) {
        return ({ ...state, UserData: action.data });
    }, 
    [types.LIST_RESPONSE](state, action) {
        return ({ ...state, listData: action.data });
    }, 
    [types.CURRENCY_LIST_RESPONSE](state, action) {
        return ({ ...state, list: action.data });
    }, 
})