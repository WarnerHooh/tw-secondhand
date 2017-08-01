import { Epic } from 'redux-most';
import { push } from 'react-router-redux';
import { v4 as uuid } from 'uuid';
import epicCreator from '../../utils/epicsCreator';

import * as D from '../../definitions';

import { login, logout,  register } from '../../apis/user';
import { show, dismiss } from '../modal/action';

import userStorage from '../../utils/storage';

import * as modalAction from '../../modules/modal/action';

export const USER_REGISTER = 'USER_REGISTER';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUC = 'USER_LOGIN_SUC';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUC = 'USER_LOGOUT_SUC';

export const userRegister = (user: D.UserForRegister): D.UserAction => ({ type: USER_REGISTER, payload: user });

export const userLogin = (user: D.UserForLogin, meta: D.MetaForLogin): D.UserAction => ({
  type: USER_LOGIN, payload: user, meta
});

export const userLogout = (): D.UserAction => ({ type: USER_LOGOUT });

const registerEpic: Epic<D.GeneralAction> = epicCreator(USER_REGISTER, register, (store) => {
  store.dispatch(modalAction.dismiss());
});

const loginEpic: Epic<D.GeneralAction> = epicCreator(USER_LOGIN, login, (store, response, action) => {
  userStorage.setUser(response).then(() => {
    let nextAction: {} = push('/profile');

    store.dispatch(dismiss());

    if (action && action.meta && action.meta.referer) {
      const referer = action.meta.referer;

      if (referer.startsWith('/')) {
        nextAction = push(referer);
      } else if (referer.startsWith('#')) {
        nextAction = show({
          id: uuid(),
          anchor: referer
        });
      }
    }
    store.dispatch(nextAction);
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
