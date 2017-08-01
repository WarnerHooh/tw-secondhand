import { LOADER_SHOW, LOADER_HIDE } from '../modules/loader/action';

export default store => next => action => {

  if (action.meta && action.meta.asyncPhase) {
    const asyncPhase = action.meta.asyncPhase;

    if (asyncPhase === 'START') {
      next({type: LOADER_SHOW});
    } else if (asyncPhase === 'SUCCESS' || asyncPhase === 'FAILED') {
      next({type: LOADER_HIDE});
    }
  }

  return next(action);
};
