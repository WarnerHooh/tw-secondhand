import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';

import * as D from '../../definitions';
import * as modalAction from '../../modules/modal/action';

import './index.css';

type ModalProps<S> = {
  anchor: string;
  modal?: D.ModalState;
  component: React.ComponentType;
  dispatch?: Redux.Dispatch<S>;
};

const Modal = (props: ModalProps<object>) => {
  const { anchor, component, modal, dispatch } = props;

  const ModalComponent = component;

  const matchedModal = modal.filter(m => m.anchor === anchor);

  if (matchedModal.length > 0) {
    return (
      <div className="modal-container">
        <div className="modal-header">
          <span
            className="modal-close"
            title="Close"
            onClick={() => { dispatch(modalAction.dismiss()); }}
          >&#10005;
          </span>
        </div>
        <div className="modal-content">
          <ModalComponent />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default connect(
  (state: D.RootState<object>) => ({
    modal: state.modal,
  })
)(Modal);
