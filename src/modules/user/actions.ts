import { fromPromise } from 'most';
import { select, Epic } from 'redux-most';

import * as D from '../../definitions';
import * as Redux from 'redux';

import { login, logout } from '../../apis/user';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUC = 'USER_LOGIN_SUC';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUC = 'USER_LOGOUT_SUC';
export const USER_LOGOUT_FAIL = 'USER_LOGOUT_FAIL';

export const userLogin = (user: D.UserForLogin): D.UserAction => ({ type: USER_LOGIN, payload: user });

export const userLogout = (): D.UserAction => ({ type: USER_LOGOUT });

const loginEpic: Epic<D.GeneralAction> = (action$) => action$.thru(select(USER_LOGIN))
    .chain((action: D.UserAction) => fromPromise(login(action.payload)))
    .map((loginResponse: null | D.UserProfile) => (
        loginResponse
        ? {type: USER_LOGIN_SUC, payload: loginResponse}
        : {type: USER_LOGIN_FAIL}
    ));

const logoutEpic: Epic<D.GeneralStringAction> = (action$) => action$.thru(select(USER_LOGOUT))
    .chain((action: D.UserAction) => fromPromise(logout()))
    .map((logoutResponse: null | string) => (
      logoutResponse
        ? {type: USER_LOGOUT_SUC, payload: logoutResponse}
        : {type: USER_LOGOUT_FAIL}
    ));

export const epics: Array<Epic<Redux.Action>> = [
  loginEpic,
  logoutEpic
];
