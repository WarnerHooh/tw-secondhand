import * as React from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import * as D from '../../definitions';
import Modal from './Modal';

import SignIn from '../pages/Login/LoginPage';
import SignUp from '../pages/SignUp/SignUpPage';
import BuyPage from '../pages/Buy/BuyPage';
import ReleasePage from '../pages/Release/ReleasePage';

import './index.css';

type ModalProps<S> = {
  modal?: D.ModalState;
};

export const AppModal = ({modal = []}: ModalProps<object>) => {
  return (
    <CSSTransitionGroup
      transitionName="modal"
      transitionAppear={false}
      transitionEnter={false}
      transitionLeave={true}
      transitionLeaveTimeout={300}
      component="div"
    >
      {
        modal.length === 0
        ? null
        : (<div className="App-modal">
            <Modal anchor="#signUpModal" component={SignUp} />
            <Modal anchor="#signInModal" component={SignIn} />
            <Modal anchor="#buyModal" component={BuyPage} />
            <Modal anchor="#releaseModal" component={ReleasePage} />
          </div>)
      }
    </CSSTransitionGroup>
  );
};

export default connect(
  (state: D.RootState<object>) => ({
    modal: state.modal,
  })
)(AppModal);
