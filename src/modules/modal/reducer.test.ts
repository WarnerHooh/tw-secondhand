import reducer from './reducer';
import { equal } from 'assert';
import { v4 as uuid } from 'uuid';

import { MODAL_SHOW, MODAL_DISMISS, MODAL_DISMISS_ALL } from './action';

describe('Modal reducer', () => {
  let modalState = [];

  it('Modal state stack should be updated after modal show called', () => {
    modalState = reducer(modalState, {type: MODAL_SHOW});

    equal(modalState.length, 1);
  });

  it('Modal state stack should be empty after modal dismiss called', () => {
    modalState = reducer(modalState, {type: MODAL_DISMISS});

    equal(modalState.length, 0);
  });

  it('Modal should not be dismissed after modal dismiss called with modal id but not match', () => {
    modalState = reducer(modalState, {type: MODAL_SHOW, payload: {id: uuid()}});

    modalState = reducer(modalState, {type: MODAL_DISMISS, payload: {id: 'WHAT_ELSE'}});

    equal(modalState.length, 1);
  });

  it('Modal state stack should be empty after modal dismissAll called', () => {
    modalState = reducer(modalState, {type: MODAL_SHOW});
    modalState = reducer(modalState, {type: MODAL_SHOW});

    modalState = reducer(modalState, {type: MODAL_DISMISS_ALL});

    equal(modalState.length, 0);
  });
});
