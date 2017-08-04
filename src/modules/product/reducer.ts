import * as D from '../../definitions';
import * as Redux from 'redux';
import { GET_PRODUCTS_SUC, GET_OWNED_SUC, GET_BOUGHT_SUC,
  UPLOAD_PRODUCT_IMAGE_SUC, CLEAR_PRODUCTS } from './actions';

const initialState: D.ProductsState = {
  available: [],
  owned: [],
  bought: [],
  imageUrl: [],
};

const productReducer: Redux.Reducer<D.ProductsState> =
  (state: D.ProductsState, action: D.QuerySucAction): D.ProductsState => {
  state = state || initialState;
  switch (action.type) {
    case GET_PRODUCTS_SUC:
      return {
        ...state,
        available: action.payload,
      };
    case GET_OWNED_SUC:
      return {
        ...state,
        owned: action.payload,
      };
    case GET_BOUGHT_SUC:
      return {
        ...state,
        bought: action.payload,
      };
    case UPLOAD_PRODUCT_IMAGE_SUC:
      return {
        ...state,
        imageUrl: action.payload,
      };
    case CLEAR_PRODUCTS:
      return initialState;
    default:
  }
  return state;
};

export default productReducer;
