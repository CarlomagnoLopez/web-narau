import { SIGN_IN, SIGN_UP, RECOVERY_PSW } from "../redux/actionTypes";

const initialState = {
  login: false,
  created: false,
  desc: "",
  contentSignIn: "",
  recovery: false
  // sendVerification:false
};

export default function (state = initialState, action) {
  switch (action.type) {

    case SIGN_IN: {
      const { contentSignIn } = action.payload;
      if (contentSignIn.login) {
        localStorage.setItem("active", "true")
      }
      
      // else {
      //   localStorage.setItem("active", "false")
      // }

      return {
        ...state,
        login: contentSignIn.login,
        signin: contentSignIn.login,
        desc: contentSignIn.desc,
        // id,
        contentSignIn: contentSignIn["custom-attr"] ? contentSignIn["custom-attr"] : ""
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

    case RECOVERY_PSW: {
      const { recovery } = action.payload;
      return {
        ...state,
        recovery
        // login: false,
        // // id,
        // created: contentSignUp.created,
        // desc: contentSignUp.desc
      };
    }

    default:
      return state;
  }
}
