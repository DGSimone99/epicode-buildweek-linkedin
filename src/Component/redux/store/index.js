import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilesReducer from "../reducers/profilesReducer";
import userReducer from "../reducers/userReducers";
import otherUserReducer from "../reducers/otherUserReducer-js";

const mainReducer = combineReducers({
  profiles: profilesReducer,
  user: userReducer,
  otherUser: otherUserReducer,
});
const store = configureStore({
  reducer: mainReducer,
});
export default store;
