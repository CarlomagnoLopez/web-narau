import { UPDATE_ATTR  } from "../redux/actionTypes";

const initialState = {
  // initialDataUser  : JSON.parse(localStorage.getItem("contentUser"))
  // sendVerification:false
};

// const initialDataUser =  JSON.parse(localStorage.getItem("contentUser"));

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_ATTR: {
      // const { dataUser } = action.payload;
      return {
        ...state,
      };
    }
    

    default:
      return state;
  }
}
