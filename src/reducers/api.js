import { SIGN_IN, SIGN_UP } from "../redux/actionTypes";

const initialState = {
  login: false,
  created: false,
  desc:""
  // sendVerification:false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN: {
      const { contentSignIn } = action.payload;
      return {
        ...state,
        login: contentSignIn.login,
        // id,
        contentSignIn
      };
    }
    case SIGN_UP: {
      const { contentSignUp } = action.payload;
      return {
        ...state,
        login: false,
        // id,
        created: contentSignUp.created,
        desc: contentSignUp.desc
      };
    }

    default:
      return state;
  }
}
