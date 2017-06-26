// This file holds our app typings

// BUSINESS LOGIC
export interface App {
    loading: boolean;
    logined: boolean;
}

export interface UserForLogin {
    username: string;
    password: string;
}
// ACTION CREATORS


// ACTIONS


// STATES
export type AppState = App;
