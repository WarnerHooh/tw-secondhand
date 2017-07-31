import * as D from '../definitions';
import { fetchApi } from './utils';

export const create = (user: D.ProductForCreate): Promise<D.Product> =>
  fetchApi('/products/create', {
    method: 'POST',
    body: JSON.stringify(user),
  });

export const uploadImg = (img: D.ProductImg): Promise<string> =>
  fetchApi('/products/upload', {
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    body: JSON.stringify(img),
  });

export const queryAvailable = (): Promise<Array<D.Product>> =>
  fetchApi('/products/', {
    method: 'GET',
  });

export const queryOwned = (): Promise<Array<D.Product>> =>
  fetchApi('/products/owned', {
    method: 'GET',
  });

export const queryBought = (): Promise<Array<D.Product>> =>
  fetchApi('/products/bought', {
    method: 'GET',
  });

export const buy = (productId: string): Promise<D.Product> =>
  fetchApi(`/products/buy?${productId}`, {
    method: 'PUT',
  });
