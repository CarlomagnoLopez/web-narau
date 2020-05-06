import { SIGN_IN } from "../redux/actionTypes";

const initialState = {
  flBussyLoader:false,
  login:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN: {
      const {  contentSignIn } = action.payload;
      return {
        ...state,
        login: contentSignIn.login,
        // id,
        contentSignIn
      };
    }

    default:
      return state;
  }
}
