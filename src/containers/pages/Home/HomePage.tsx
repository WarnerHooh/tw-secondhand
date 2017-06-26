import * as React from 'react';
import * as Components from '../../../components';
import './HomePage.css';

export default () => (
    <div className="App">
        <div className="App-header">
            <Components.Logo />
            <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
    </div>
);
