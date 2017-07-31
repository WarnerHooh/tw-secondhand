import * as D from '../definitions';
import { fetchApi } from './utils';

export const login = (user: D.UserForLogin): Promise<D.UserProfile> =>
  fetchApi('/users/login', {
    method: 'POST',
    body: JSON.stringify(user),
  });

export const logout = (): Promise<string> =>
  fetchApi('/users/logout');

export const register = (user: D.UserForLogin): Promise<string> =>
  fetchApi('/users/register', {
    method: 'POST',
    body: JSON.stringify(user),
  });
