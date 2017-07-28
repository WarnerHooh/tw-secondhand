import * as D from '../../definitions';
import * as Redux from 'redux';

const initialState: D.ProductsState = [];

const productReducer: Redux.Reducer<D.ProductsState> =
  (state: D.ProductsState, action: D.QuerySucAction): D.ProductsState => {
  state = state || initialState;
  switch (action.type) {
    case 'GET_PRODUCTS_SUC':
      return [
        ...state,
        ...action.payload
      ];
    default:
  }
  return state;
};

export default productReducer;
