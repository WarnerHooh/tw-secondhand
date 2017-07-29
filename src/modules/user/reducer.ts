import * as D from '../../definitions';
import * as Redux from 'redux';
import userStorage from '../../storage/user';

const initialState: D.UserState = {
    name: ''
};

const userReducer: Redux.Reducer<D.UserState> = (state: D.UserState, action: D.UserSucAction): D.UserState => {
    state = state || initialState;
    switch (action.type) {
        case 'USER_LOGIN_SUC':
            userStorage.setUser(action.payload);
            return {
                ...state,
                name: action.payload.username
            };
        case 'USER_LOGOUT_SUC':
            userStorage.removeUser();
            return {
                ...state,
                name: ''
            };
        default:
    }
    return state;
};

export default userReducer;
