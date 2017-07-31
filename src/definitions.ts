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

interface Person {
  username: string;
  projectId: string;
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

export interface ProductImg {
  img: object;
}

export interface Modal {
    id: string;
    anchor: string;
    passProps?: object;
}

// ACTION CREATORS


// ACTIONS
export interface GeneralAction extends Redux.Action {
    payload?: object;
}
export interface GeneralStringAction extends Redux.Action {
    payload?: string;
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

export interface ModalAction extends GeneralAction {
    payload?: Modal;
}

// STATES
export type AppState = App;
export type UserState = User;
export type ProductsState = Array<Product>;
export type ModalState = Array<Modal>;

export interface RootState<S> {
    user?: UserState;
    app?: AppState;
    router?: ReactRouter.RouteComponentProps<S>;
    products?: ProductsState;
    modal?: ModalState;
}
