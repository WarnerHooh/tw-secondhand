import * as D from '../../definitions';
import * as Redux from 'redux';

import { USER_LOGIN_SUC, USER_LOGOUT_SUC } from './actions';

const initialState: D.UserState = {
    name: ''
};

const userReducer: Redux.Reducer<D.UserState> = (state: D.UserState, action: D.UserSucAction): D.UserState => {
    state = state || initialState;
    switch (action.type) {
        case USER_LOGIN_SUC:
            return {
                ...state,
                name: action.payload.username
            };
        case USER_LOGOUT_SUC:
            return {
                ...state,
                name: ''
            };
        default:
    }
    return state;
};

export default userReducer;
