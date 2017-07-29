import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';

import * as D from '../../../definitions';

import { layoutWrapper } from '../../layout';

import { userLogout } from '../../../modules/user/actions';

type ProfilePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  user: D.UserState,
};

const ProfilePage = (props: ProfilePageProps<object>) => (
  <div>
    <h2>{props.user.name}</h2>
    <p>
      <button onClick={() => props.dispatch(push('/'))}>Go Back to Home</button>
    </p>
    <p>
      <button onClick={() => props.dispatch(userLogout())}>Logout</button>
    </p>
  </div>
);

export default layoutWrapper(connect((state: D.RootState<object>) => ({
  user: state.user,
}))(ProfilePage));
