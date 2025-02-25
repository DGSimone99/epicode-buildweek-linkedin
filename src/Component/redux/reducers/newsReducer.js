import { SET_NEWS } from "../actions";

const initialState = {
  content: {},
};
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default newsReducer;
