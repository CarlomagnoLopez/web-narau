import { SIGN_IN,SIGN_UP } from "./actionTypes";

// let nextTodoId = 0;

export const singIn = contentSignIn => ({
  type: SIGN_IN,
  payload: {
    // id: ++nextTodoId,
    contentSignIn
  }
});

export const singUp = contentSignUp => ({
  type: SIGN_UP,
  payload: {
    // id: ++nextTodoId,
    contentSignUp
  }
});


