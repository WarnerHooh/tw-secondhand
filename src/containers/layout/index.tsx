import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';
import Modal from '../modal';
import * as modalAction from '../../modules/modal/action';
import { v4 as uuid } from 'uuid';

import * as D from '../../definitions';

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
  const isHomeSelected = location.pathname === '/';
  const isMeSelected = location.pathname === '/profile';
  const homeClass = isHomeSelected ? 'selected ' : '';
  const meClass = isMeSelected ? 'selected ' : '';

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
          <span onClick={() => dispatch(push('/'))}  className={homeClass + 'Nav-item icon-home'}>
            <img src={homeIcon} alt="home icon"/>
          </span>
          <span className="Nav-item icon-plus">
            <img src={upIcon} alt="plus icon"/>
          </span>
          <span
            onClick={() => {
              dispatch(push('profile'));
              dispatch(modalAction.show({
                id: uuid(),
                anchor: '#signInModal'
              }));
            }}
            className={meClass + 'Nav-item icon-me'}>
            <img src={meIcon} alt="person icon"/>
          </span>
        </div>
      </div>

      <Modal />
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
