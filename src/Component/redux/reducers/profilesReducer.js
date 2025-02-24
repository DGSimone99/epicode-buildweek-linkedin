import { SET_PROFILES } from "../actions";

const initialState = {
  content: [],
};
const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILES:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default profilesReducer;
