import { fromPromise } from 'most';
import { combineEpics, select, Epic } from 'redux-most';

import { login } from '../apis/user';

const loginEpic: Epic<object> = (action$) => action$.thru(select('USER_LOGIN'))
    .chain(() => fromPromise(login({
        username: 'admin',
        password: 'admin',
    })))
    .map(loginResponse => ({
        type: 'USER_LOGIN_FINISHED',
    }));

export default combineEpics([
    loginEpic,
]);