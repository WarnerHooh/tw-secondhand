import { Epic } from 'redux-most';
import { push } from 'react-router-redux';
import epicCreator from '../../utils/epicsCreator';

import * as D from '../../definitions';

import { login, logout } from '../../apis/user';

import userStorage from '../../utils/storage';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUC = 'USER_LOGIN_SUC';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUC = 'USER_LOGOUT_SUC';

export const userLogin = (user: D.UserForLogin): D.UserAction => ({ type: USER_LOGIN, payload: user });

export const userLogout = (): D.UserAction => ({ type: USER_LOGOUT });

const loginEpic: Epic<D.GeneralAction> = epicCreator(USER_LOGIN, login, (store, response) => {
  userStorage.setUser(response).then(() => {
    store.dispatch(push('/profile'));
  });
});

const logoutEpic: Epic<D.GeneralAction> = epicCreator(USER_LOGOUT, logout, (store) => {
  userStorage.removeUser().then(() => {
    store.dispatch(push('/'));
  });
});

export const epics: Array<Epic<D.GeneralAction>> = [
  loginEpic,
  logoutEpic,
];
