import userStorage from '../storage/user';

const baseUrl = 'http://secondhand.leanapp.cn';

export const fetchApi = (serviceUrl, options) => {
  const url = `${baseUrl}${serviceUrl}`;
  const token = userStorage.getToken();

  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(token ? { 'sessionToken': token } : {}),
  });

  const finalConfig = {
    headers,
    ...options,
  };

  return fetch(url, finalConfig)
    .then(response => {
      if (response.status < 400) {
        return response.json();
      }
      throw response;
    });
};
