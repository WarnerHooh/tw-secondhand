import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-most';

import reducers from './reducers';
import rootEpic from './epics';

const storeConfigure = (history: History) => {
    const reducer = combineReducers(reducers);
    const historyMiddleware = routerMiddleware(history);
    const mostMiddleware = createEpicMiddleware(rootEpic);
    
    const middlewares = [thunk, historyMiddleware, mostMiddleware];
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    
    return createStoreWithMiddleware(reducer);
};

export default storeConfigure;
