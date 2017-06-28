import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';

import * as Components from '../../../components';
import './HomePage.css';

class HomePage extends React.Component<DispatchProp<object> & RouteComponentProps<object>> {
    render() {
        const { dispatch } = this.props;
        return (
            <div className="App">
                <div className="App-header">
                    <Components.Logo />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                    <button onClick={() => dispatch(push('about-us'))}>Go to About Us</button>
                </p>
            </div>
        );
    }
}

export default connect()(HomePage);