import * as D from '../definitions';
import { fetchApi } from './utils';

export const create = (product: D.ProductForCreate): Promise<D.Product> =>
  fetchApi('/products/create', {
    method: 'POST',
    body: JSON.stringify(product),
  });

export const uploadImg = (img: File): Promise<string> => {
  const data = new FormData();
  data.append('img', img);

  return fetchApi(
    '/products/upload',
    {
      method: 'POST',
      body: data,
    },
    true
  );
};

export const queryAvailable = (): Promise<Array<D.Product>> =>
  fetchApi('/products/');

export const queryOwned = (): Promise<Array<D.Product>> =>
  fetchApi('/products/owned');

export const queryBought = (): Promise<Array<D.Product>> =>
  fetchApi('/products/bought');

export const buy = (productId: string): Promise<D.Product> =>
  fetchApi(`/products/buy/${productId}`, {
    method: 'PUT',
  });
