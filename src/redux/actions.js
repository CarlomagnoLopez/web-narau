import { SIGN_IN, SIGN_UP, RECOVERY_PSW , UPDATE_ATTR} from "./actionTypes";

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

export const recoveryPsw = recovery => ({
  type: RECOVERY_PSW,
  payload: {
    // id: ++nextTodoId,
    recovery
  }
});

export const updateAttr = dataUser => ({
  type: UPDATE_ATTR,
  payload: {
    // id: ++nextTodoId,
    dataUser
  }
});



