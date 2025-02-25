import { SET_OTHERUSER } from "../actions";

const initialState = {
  content: {},
};
const otherUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OTHERUSER:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default otherUserReducer;
