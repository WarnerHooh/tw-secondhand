import * as D from '../definitions';

const USER_STORAGE_KEY = 'user';

function setUser(user: D.UserProfile) {
  window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  return Promise.resolve(user);
}

function removeUser() {
  window.localStorage.removeItem(USER_STORAGE_KEY);
  return Promise.resolve(null);
}

function getUserSync() {
  return JSON.parse(window.localStorage.getItem(USER_STORAGE_KEY));
}

function getUser() {
  const user = getUserSync();
  return user ? Promise.resolve(user) : Promise.reject('Could not find user');
}

function getToken() {
  const user = JSON.parse(window.localStorage.getItem(USER_STORAGE_KEY));
  return user ? user.sessionToken : undefined;
}

export default {
  setUser,
  removeUser,
  getUserSync,
  getUser,
  getToken,
};
