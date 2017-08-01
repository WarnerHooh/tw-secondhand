import * as React from 'react';
import { connect } from 'react-redux';

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

const AppModal = ({modal}: ModalProps<object>) => {
    if (modal.length === 0) {
      return null;
    }

    return (
      <div className="App-modal">
        <Modal anchor="#signUpModal" component={SignUp} />
        <Modal anchor="#signInModal" component={SignIn} />
        <Modal anchor="#buyModal" component={BuyPage} />
        <Modal anchor="#releaseModal" component={ReleasePage} />
      </div>
    );
};

export default connect(
  (state: D.RootState<object>) => ({
    modal: state.modal,
  })
)(AppModal);
