import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';

import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

import initialState from './initialState';
import reducers from './reducers';
import middlewares from './middlewares';

const storeConfigure = (history: History) => {
    const reducer = storage.reducer(combineReducers(reducers));
    const router = routerMiddleware(history);

    // bump up storage version if state structure change
    const engine = createEngine('myApp-0.0.1');
    const storeMiddleware = storage.createMiddleware(engine, [], [
    // White list actions, will not save anything if leave blank here
    ]);

    const createStoreWithMiddleware = applyMiddleware(router, storeMiddleware, ...middlewares)(createStore);
    
    const store = createStoreWithMiddleware(reducer, initialState);
    
    const load = storage.createLoader(engine);
    // will trigger storage load action
    load(store);

    return store;
};

export default storeConfigure;
