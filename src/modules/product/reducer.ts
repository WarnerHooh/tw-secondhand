import * as D from '../../definitions';
import * as Redux from 'redux';

const initialState: D.ProductsState = {
  available: [],
  owned: [],
  bought: [],
  imageUrl: '',
};

const productReducer: Redux.Reducer<D.ProductsState> =
  (state: D.ProductsState, action): D.ProductsState => {
  state = state || initialState;
  switch (action.type) {
    case 'GET_PRODUCTS_SUC':
      return {
        ...state,
        available: action.payload,
      };
    case 'GET_OWNED_SUC':
      return {
        ...state,
        owned: action.payload,
      };
    case 'GET_BOUGHT_SUC':
      return {
        ...state,
        bought: action.payload,
      };
    case 'BUY_PRODUCT_SUC':
      return {
        ...state,
        bought: state.bought.concat(Object.assign(
                  {},
                  state.available.find(product => product.objectId === action.payload.objectId),
                  )),
        available: state.available.filter( product => {
            return product.objectId !== action.payload.objectId;
        }),
      };
    case 'UPLOAD_PRODUCT_IMAGE_SUC':
      return {
        ...state,
        imageUrl: action.payload,
      };
    default:
  }
  return state;
};

export default productReducer;
