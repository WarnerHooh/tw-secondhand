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

export interface UserForRegister {
  username: string;
  password: string;
}

export interface UserForLogin {
    username: string;
    password: string;
}

export interface MetaForLogin {
  referer: string;
}

export interface Person {
  username: string;
  objectId: string;
}

export interface Product {
  name: string;
  price: string;
  img: string;
  description: string;
  owner: Person;
  buyer?: Person;
  objectId: string;
}

export interface ProductForCreate {
  name: string;
  price: string;
  img: string;
  description: string;
}

export interface Modal {
    id?: string;
    anchor: string;
    passProps?: object;
}

// ACTION CREATORS

// ACTIONS
export interface GeneralAction extends Redux.Action {
    payload?: object | string;
}

export interface UserAction extends GeneralAction {
    payload?: UserForLogin;
    meta?: MetaForLogin;
}
export interface UserSucAction extends GeneralAction {
    payload?: UserProfile;
}

export interface QuerySucAction extends GeneralAction {
    payload?: Array<Product>;
}

export interface ModalAction extends GeneralAction {
    payload?: Modal;
}

// STATES
export type AppState = App;
export type UserState = User;
export type ProductsState = {
    available: Array<Product>;
    owned: Array<Product>;
    bought: Array<Product>;
    imageUrl: Array<Product>;
}
export type ModalState = Array<Modal>;

export interface RootState<S> {
    user?: UserState;
    app?: AppState;
    router?: ReactRouter.RouteComponentProps<S>;
    products?: ProductsState;
    modal?: ModalState;
    loader?: boolean;
}
