import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import * as D from '../../definitions';
import * as modalAction from '../../modules/modal/action';

import './index.css';

type ModalProps<S> = {
  anchor: string;
  modal?: D.ModalState;
  component: React.ComponentType;
  dispatch?: Redux.Dispatch<S>;
};

export const Modal = (props: ModalProps<object>) => {
  const { anchor, component, modal, dispatch } = props;

  const ModalComponent = component;

  return (
    <CSSTransitionGroup
      transitionName="modal"
      transitionAppear={true}
      transitionAppearTimeout={300}
      transitionEnter={true}
      transitionEnterTimeout={300}
      transitionLeave={true}
      transitionLeaveTimeout={300}
      component="div"
      className="modal-transition"
    >
      { modal.map((m, i) => {
        if (m.anchor === anchor) {
          return (
            <div className={`modal-container modal-weight-${i + 1}`} key={`${m.id}`}>
              <div className="modal-header">
              <span
                className="modal-close"
                title="Close"
                onClick={() => { dispatch(modalAction.dismiss()); }}
              >&#10005;
              </span>
              </div>
              <div className="modal-content">
                <ModalComponent {...m.passProps} />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </CSSTransitionGroup>
  );
};

export default connect(
  (state: D.RootState<object>) => ({
    modal: state.modal,
  })
)(Modal);

