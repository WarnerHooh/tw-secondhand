import { fromPromise } from 'most';
import { select } from 'redux-most';

export default (type, asyncFn, sucCallback?: Function|null, failCallback?: Function|null) => (action$, store) => {
  let isError = false;

  return action$.thru(select(type))
    .chain(action => {
      store.dispatch({type: `START`});

      return fromPromise(
        asyncFn(action.payload).catch((e) => {
          isError = true;
          return e;
        })
      );
    })
    .map(response => {
      if (!isError && sucCallback) {
        sucCallback(store, response);
      } else if (isError && failCallback) {
        failCallback(store);
      }

      return !isError
        ? {type: `${type}_SUC`, payload: response}
        : {type: `${type}_FAIL`, payload: response};
    });
};
