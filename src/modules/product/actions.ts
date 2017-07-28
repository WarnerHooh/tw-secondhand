import { fromPromise } from 'most';
import { select, Epic } from 'redux-most';

import * as D from '../../definitions';
import { queryBought } from '../../apis/products';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUC = 'GET_PRODUCTS_SUC';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const getProducts = (): D.GeneralAction => ({ type: GET_PRODUCTS });

const queryAvailableEpic: Epic<D.GeneralAction> = (action$) => action$.thru(select(GET_PRODUCTS))
  .chain((action: D.UserAction) => fromPromise(queryBought()))
  .map((queryResponse: null | Array<D.Product>) => (
    queryResponse
      ? {type: GET_PRODUCTS_SUC, payload: queryResponse}
      : {type: GET_PRODUCTS_FAIL}
  ));

export const epics: Array<Epic<D.GeneralAction>> = [
  queryAvailableEpic,
];
