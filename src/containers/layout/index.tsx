import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';
import Modal from '../modal';
import Loader from '../../components/Loader';
import * as modalAction from '../../modules/modal/action';

import * as D from '../../definitions';

import './index.css';

const homeIcon = require('./assets/home.png');
const upIcon = require('./assets/plus-icon.png');
const meIcon = require('./assets/person.png');

type LayoutProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  user: D.UserState,
  location: Object,
  children: Object,
  title: string,
};

const Layout = (props: LayoutProps<object>) => {
  const { dispatch, children, location, user } = props;
  const isHomeSelected = location.pathname === '/';
  const isMeSelected = location.pathname === '/profile'
    || location.pathname === '/owned' || location.pathname === '/bought';
  const homeClass = isHomeSelected ? 'selected ' : '';
  const meClass = isMeSelected ? 'selected ' : '';

  return (
    <div className="App">
      <div className="App-header">
        <h3>{props.title}</h3>
      </div>
      <div className="App-content content-wrapper">
        {children}
      </div>
      <div className="App-footer">
        <div className="App-Nav">
          <span
            className={homeClass + 'Nav-item icon-home'}
            onClick={() => {
              if (!isHomeSelected) {
                dispatch(push('/'));
              }
            }}
          >
            <img src={homeIcon} alt="home icon"/>
          </span>
          <span
            className="Nav-item icon-plus"
            onClick={() => {
              if (user.name) {
                dispatch(modalAction.show({
                  anchor: '#releaseModal',
                  passProps: {}
                }));
              } else {
                dispatch(modalAction.show({
                  anchor: '#signInModal',
                  passProps: {
                    referer: '#releaseModal'
                  }
                }));
              }
            }}
          >
            <img src={upIcon} alt="plus icon"/>
          </span>
          <span
            className={meClass + 'Nav-item icon-me'}
            onClick={() => {
              if (user.name) {
                if (!isMeSelected) {
                  dispatch(push('profile'));
                }
              } else {
                dispatch(modalAction.show({
                  anchor: '#signInModal',
                  passProps: {
                    referer: '/profile'
                  }
                }));
              }
            }}
          >
            <img src={meIcon} alt="person icon"/>
          </span>
        </div>
      </div>

      <Modal />
      <Loader />
    </div>
  );
};

const ConnectedLayout = connect(
  (state: D.RootState<object>) => ({
    user: state.user,
    location: state.router.location,
  })
)(Layout);

const layoutWrapper = (InnerContent, title) => (
  function DashboardLayout(props: LayoutProps<object>) {
    return (
      <ConnectedLayout title={title} {...props} >
        <InnerContent {...props} />
      </ConnectedLayout>
    );
  }
);

export { Layout, layoutWrapper };

export default ConnectedLayout;
