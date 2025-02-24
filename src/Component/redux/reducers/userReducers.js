import { SET_USER } from "../actions";

const initialState = {
  content: {},
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
