import { GET_POST, POST_POST } from "../actions";

const initialState = {
  content: [],
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        content: action.payload,
      };
    case POST_POST:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default postReducer;
