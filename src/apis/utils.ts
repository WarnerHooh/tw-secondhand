import userStorage from '../utils/storage';

const baseUrl = 'http://secondhand.leanapp.cn';

export const fetchApi = (serviceUrl, options?) => {
  const url = `${baseUrl}${serviceUrl}`;
  const token = userStorage.getToken();

  const headers = new Headers({
    method: 'GET',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(token ? { 'sessionToken': token } : {}),
  });

  const finalConfig = {
    headers,
    ...options,
  };

  let status;

  return fetch(url, finalConfig)
    .then(response => {
      status = response.status;
      return response.json();
    }).then(json => {
      if (status < 400) {
        return json;
      }
      throw json;
    }, ({message}) => {
      throw {message};
    });
};
