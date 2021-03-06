import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';

import * as D from '../../../definitions';

import { Button } from '../../../components';
import { layoutWrapper } from '../../layout';

import { userLogout } from '../../../modules/user/actions';

import './ProfilePage.css';

type ProfilePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  user: D.UserState,
};

const avatar = require('../../../styles/assets/login.png');

const ProfilePage = (props: ProfilePageProps<object>) => (
  <div className="Profile">
    <p className="Info">
      <img src={avatar} alt="avatar"/>
      <span>{props.user.name}</span>
    </p>
    <Button
      text="已买宝贝"
      className="btn"
      onClick={() => props.dispatch(push('/bought'))}
    />
    <Button
      text="出售宝贝"
      className="btn"
      onClick={() => props.dispatch(push('/owned'))}
    />
    <Button
      text="退出登录"
      className="btn"
      onClick={() => props.dispatch(userLogout())}
    />
  </div>
);

export default layoutWrapper('个人信息')(connect(
  (state: D.RootState<object>) => ({
    user: state.user,
  })
)(ProfilePage));
