// import { fromPromise } from 'most';
import { Epic } from 'redux-most';
import { push } from 'react-router-redux';

import * as D from '../../definitions';
import { queryAvailable, queryOwned , queryBought , buy } from '../../apis/products';

import epicCreator from '../../utils/epicsCreator';

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

export const getProducts = (): D.GeneralAction => ({ type: GET_PRODUCTS });
export const getOwnedProducts = (): D.GeneralAction => ({ type: GET_OWNED });
export const getBoughtProducts = (): D.GeneralAction => ({ type: GET_BOUGHT });
export const buyProduct = (productId: string): D.GeneralAction => ({ type: BUY_PRODUCT, payload: productId});

// const queryAvailableEpic: Epic<D.GeneralAction> = (action$) => action$.thru(select(GET_PRODUCTS))
//   .chain((action: D.GeneralAction) => fromPromise(queryAvailable()))
//   .map((queryResponse: null | Array<D.Product>) => (
//     queryResponse
//       ? {type: GET_PRODUCTS_SUC, payload: queryResponse}
//       : {type: GET_PRODUCTS_FAIL}
//   ));
//
// const queryOwnedEpic: Epic<D.GeneralAction> = (action$) => action$.thru(select(GET_OWNED))
//   .chain((action: D.GeneralAction) => fromPromise(queryOwned()))
//   .map((queryResponse: null | Array<D.Product>) => (
//     queryResponse
//       ? {type: GET_OWNED_SUC, payload: queryResponse}
//       : {type: GET_OWNED_FAIL}
//   ));
//
// const queryBoughtEpic: Epic<D.GeneralAction> = (action$) => action$.thru(select(GET_BOUGHT))
//   .chain((action: D.GeneralAction) => fromPromise(queryBought()))
//   .map((queryResponse: null | Array<D.Product>) => (
//     queryResponse
//       ? {type: GET_BOUGHT_SUC, payload: queryResponse}
//       : {type: GET_BOUGHT_FAIL}
//   ));

const buySucCallback = (store) => {
  store.dispatch(push('/'));
};

const buyFailCallBack = () => {
  alert('sorry, buy fail!');
};

const queryAvailableEpic: Epic<D.GeneralAction> = epicCreator(GET_PRODUCTS, queryAvailable);

const queryOwnedEpic: Epic<D.GeneralAction> = epicCreator(GET_OWNED, queryOwned);

const queryBoughtEpic: Epic<D.GeneralAction> = epicCreator(GET_BOUGHT, queryBought);

const buyProductEpic: Epic<D.GeneralAction> = epicCreator(BUY_PRODUCT, buy, buySucCallback, buyFailCallBack);

export const epics: Array<Epic<D.GeneralAction>> = [
  queryAvailableEpic,
  queryOwnedEpic,
  queryBoughtEpic,
  buyProductEpic,
];
