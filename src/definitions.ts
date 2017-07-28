import * as Redux from 'redux';
import * as ReactRouter from 'react-router';

// This file holds our app typings


// BUSINESS LOGIC
export interface App {
    loading: boolean;
    logined: boolean;
}

export interface User {
    name: string;
}

export interface UserProfile {
    username: string;
    sessionToken: string;
}

export interface UserForLogin {
    username: string;
    password: string;
}

export interface Product {
  name: string;
  price: string;
  img: string;
  description: string;
  owner: Object;
  buyer?: Object;
  objectId: string;
}

export interface ProductForCreate {
  name: string;
  price: string;
  img: string;
  description: string;
}

export interface ProductImg {
  img: object;
}

// ACTION CREATORS


// ACTIONS
export interface GeneralAction extends Redux.Action {
    payload?: object;
}
export interface UserAction extends GeneralAction {
    payload?: UserForLogin;
}
export interface UserSucAction extends GeneralAction {
    payload?: UserProfile;
}

export interface QuerySucAction extends GeneralAction {
    payload?: ProductsState;
}

// STATES
export type AppState = App;
export type UserState = User;
export type ProductsState = Array<Product>;

export interface RootState<S> {
    user?: UserState;
    app?: AppState;
    router?: ReactRouter.RouteComponentProps<S>;
    products?: ProductsState;
}
