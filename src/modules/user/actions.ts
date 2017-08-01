import { Epic } from 'redux-most';
import { push } from 'react-router-redux';
import epicCreator from '../../utils/epicsCreator';

import * as D from '../../definitions';

import { login, logout,  register } from '../../apis/user';

import userStorage from '../../utils/storage';

import * as modalAction from '../../modules/modal/action';

export const USER_REGISTER = 'USER_REGISTER';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUC = 'USER_LOGIN_SUC';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUC = 'USER_LOGOUT_SUC';

export const userRegister = (user: D.UserForRegister): D.UserAction => ({ type: USER_REGISTER, payload: user });

export const userLogin = (user: D.UserForLogin): D.UserAction => ({ type: USER_LOGIN, payload: user });

export const userLogout = (): D.UserAction => ({ type: USER_LOGOUT });

const registerEpic: Epic<D.GeneralAction> = epicCreator(USER_REGISTER, register, (store) => {
  store.dispatch(modalAction.dismiss());
});

const loginEpic: Epic<D.GeneralAction> = epicCreator(USER_LOGIN, login, (store, response) => {
  userStorage.setUser(response).then(() => {
    store.dispatch(push('/profile'));
  });
});

const logoutCallback = (store) => {
  userStorage.removeUser().then(() => {
    store.dispatch(push('/'));
  });
};

const logoutEpic: Epic<D.GeneralAction> = epicCreator(USER_LOGOUT, logout, logoutCallback, logoutCallback);

export const epics: Array<Epic<D.GeneralAction>> = [
  registerEpic,
  loginEpic,
  logoutEpic,
];
