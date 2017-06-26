import { fromPromise } from 'most';
import { combineEpics, select, Epic } from 'redux-most';

import { login } from '../apis/user';

const loginEpic: Epic<object> = (action$) => action$.thru(select('USER_LOGIN'))
    .chain(() => fromPromise(login({
        username: 'admin',
        password: 'admin',
    })))
    .map(loginResponse => (
        loginResponse
        ? {type: 'USER_LOGIN_SUC'}
        : {type: 'USER_LOGIN_FAIL'}
    ));

export default combineEpics([
    loginEpic,
]);