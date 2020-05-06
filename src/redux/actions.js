import { SIGN_IN } from "./actionTypes";

// let nextTodoId = 0;

export const singIn = contentSignIn => ({
  type: SIGN_IN,
  payload: {
    // id: ++nextTodoId,
    contentSignIn
  }
});

