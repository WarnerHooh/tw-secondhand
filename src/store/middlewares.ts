import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-most';

import rootEpic from './epics';

const mostMiddleware = createEpicMiddleware(rootEpic);
    
const middlewares = [thunk, mostMiddleware];

export default middlewares;
