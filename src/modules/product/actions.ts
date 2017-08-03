// import { fromPromise } from 'most';
import { Epic } from 'redux-most';
import { push } from 'react-router-redux';

import * as D from '../../definitions';
import { queryAvailable, queryOwned , queryBought , buy, uploadImg, create } from '../../apis/products';

import epicCreator from '../../utils/epicsCreator';
import { dismiss } from '../modal/action';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUC = 'GET_PRODUCTS_SUC';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const GET_OWNED = 'GET_OWNED';
export const GET_OWNED_SUC = 'GET_OWNED_SUC';
export const GET_OWNED_FAIL = 'GET_OWNED_FAIL';

export const GET_BOUGHT = 'GET_BOUGHT';
export const GET_BOUGHT_SUC = 'GET_BOUGHT_SUC';
export const GET_BOUGHT_FAIL = 'GET_BOUGHT_FAIL';

export const BUY_PRODUCT = 'BUY_PRODUCT';
export const BUY_PRODUCT_SUC = 'BUY_PRODUCT_SUC';
export const BUY_PRODUCT_FAIL = 'BUY_PRODUCT_FAIL';

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_SUC = 'CREATE_PRODUCT_SUC';

export const UPLOAD_PRODUCT_IMAGE = 'UPLOAD_PRODUCT_IMAGE';
export const UPLOAD_PRODUCT_IMAGE_SUC = 'UPLOAD_PRODUCT_IMAGE_SUC';

export const getProducts = (): D.GeneralAction => ({ type: GET_PRODUCTS });
export const getOwnedProducts = (): D.GeneralAction => ({ type: GET_OWNED });
export const getBoughtProducts = (): D.GeneralAction => ({ type: GET_BOUGHT });
export const buyProduct = (productId: string): D.GeneralAction => ({ type: BUY_PRODUCT, payload: productId});
export const uploadProductImage =  (img: string): D.GeneralAction => ({ type: UPLOAD_PRODUCT_IMAGE, payload: img});
export const createProduct =
  (product: D.ProductForCreate): D.GeneralAction => ({type: CREATE_PRODUCT, payload: product});


const buySucCallback = (store) => {
  store.dispatch(dismiss());
  store.dispatch(getProducts());
  store.dispatch(push('/'));
};

const createSucCallback = (store) => {
  store.dispatch(dismiss());
  store.dispatch(getProducts());
  store.dispatch(push('/'));

};
const queryAvailableEpic: Epic<D.GeneralAction> = epicCreator(GET_PRODUCTS, queryAvailable);

const queryOwnedEpic: Epic<D.GeneralAction> = epicCreator(GET_OWNED, queryOwned);

const queryBoughtEpic: Epic<D.GeneralAction> = epicCreator(GET_BOUGHT, queryBought);

const buyProductEpic: Epic<D.GeneralAction> = epicCreator(BUY_PRODUCT, buy, buySucCallback);

const uploadProductImageEpic: Epic<D.GeneralAction> = epicCreator(UPLOAD_PRODUCT_IMAGE, uploadImg);

const createProductEpic: Epic<D.GeneralAction> = epicCreator(CREATE_PRODUCT, create, createSucCallback);

export const epics: Array<Epic<D.GeneralAction>> = [
  queryAvailableEpic,
  queryOwnedEpic,
  queryBoughtEpic,
  buyProductEpic,
  uploadProductImageEpic,
  createProductEpic,
];
