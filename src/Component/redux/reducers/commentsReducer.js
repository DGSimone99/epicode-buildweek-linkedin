import { SET_COMMENTS } from "../actions";

const initialState = {
  content: [],
};
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default commentsReducer;
