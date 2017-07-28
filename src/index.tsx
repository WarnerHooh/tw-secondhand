import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'isomorphic-fetch';

if (process.env.NODE_ENV === 'development') {
  require('./apis/mocks');
}

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/normalize.css';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
