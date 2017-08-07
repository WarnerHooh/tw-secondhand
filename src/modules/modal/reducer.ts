import * as D from '../../definitions';
import * as Redux from 'redux';

import { MODAL_SHOW, MODAL_DISMISS, MODAL_DISMISS_ALL } from './action';

const initialState: D.ModalState  = [];

const modalReducer: Redux.Reducer<D.ModalState> = (state: D.ModalState, action: D.ModalAction): D.ModalState => {
  state = state || initialState;
  switch (action.type) {
    case MODAL_SHOW:
      return [
        ...state,
        action.payload
      ];

    case MODAL_DISMISS:
      if (action.payload && action.payload.id) {
        const { id } = action.payload;
        return state.filter((modal) => modal.id !== id);
      } else {
        return state.slice(0, state.length - 1);
      }

    case MODAL_DISMISS_ALL:
      return [];

    default:
  }
  return state;
};

export default modalReducer;
