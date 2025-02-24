import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilesReducer from "../reducers/profilesReducer";
import userReducer from "../reducers/userReducers";

const mainReducer = combineReducers({
  profiles: profilesReducer,
  user: userReducer,
});
const store = configureStore({
  reducer: mainReducer,
});
export default store;
