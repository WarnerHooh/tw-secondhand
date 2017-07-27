import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';

import * as D from '../../definitions';
// import * as Components from '../../components';

import './index.css';

const homeIcon = require('./assets/home.png');
const upIcon = require('./assets/plus-icon.png');
const meIcon = require('./assets/person.png');

type LayoutProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  user: D.UserState,
  location: Object,
  children: Object
};

const Layout = (props: LayoutProps<object>) => {
  const { dispatch, children, location } = props;
  const isSelected = location.pathname === '/';
  const selectedClass = isSelected ? 'selected ' : '';
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <div className="App-content content-wrapper">
        {children}
      </div>
      <div className="App-footer">
        <div className="App-Nav">
          <span onClick={() => dispatch(push('/'))}  className={selectedClass + 'Nav-item icon-home'}>
            <img src={homeIcon} alt="home icon"/>
          </span>
          <span className="Nav-item icon-plus">
            <img src={upIcon} alt="plus icon"/>
          </span>
          <span onClick={() => dispatch(push('about-us'))} className="Nav-item icon-me">
            <img src={meIcon} alt="person icon"/>
          </span>
        </div>
      </div>
    </div>
  );
};

const ConnectedLayout = connect(
  (state: D.RootState<object>) => ({
    user: state.user,
    location: state.router.location,
  })
)(Layout);

const layoutWrapper = InnerContent => (
  function DashboardLayout(props: LayoutProps<object>) {
    return (
      <ConnectedLayout {...props}>
        <InnerContent {...props} />
      </ConnectedLayout>
    );
  }
);

export { Layout, layoutWrapper };

export default ConnectedLayout;
