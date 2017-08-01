import * as D from '../../definitions';
import * as Redux from 'redux';

import { LOADER_SHOW, LOADER_HIDE } from './action';

const initialState: boolean  = false;

const loaderReducer: Redux.Reducer<boolean> = (state: boolean, action: D.GeneralAction): boolean => {
  state = state || initialState;
  switch (action.type) {
    case LOADER_SHOW:
      return true;

    case LOADER_HIDE:
      return false;

    default:
  }

  return state;
};

export default loaderReducer;
