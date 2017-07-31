import { fromPromise } from 'most';
import { select } from 'redux-most';

export default (type, asyncFn) => (action$, { dispatch }) => {
  let isError = false;

  return action$.thru(select(type))
    .chain(action => {
      dispatch({type: `START`});

      return fromPromise(
        asyncFn(action.payload).catch((e) => {
          isError = true;
          return e;
        })
      );
    })
    .map(response => {
      return !isError
        ? {type: `${type}_SUC`, payload: response}
        : {type: `${type}_FAIL`, payload: response};
    });
};
