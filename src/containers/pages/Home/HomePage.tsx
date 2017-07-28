import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
// import { userLogin } from '../../../modules/user/actions';

import { layoutWrapper } from '../../layout';

import './HomePage.css';
type HomePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    user: D.UserState,
};

const HomePage = (props: HomePageProps<object>) => {
    // const { dispatch, user } = props;
    return (
        <div>list of products</div>
    );
};

export default layoutWrapper(connect(
  (state: D.RootState<object>) => ({user: state.user})
)(HomePage));
