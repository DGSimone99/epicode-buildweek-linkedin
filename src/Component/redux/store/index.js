import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilesReducer from "../reducers/profilesReducer";

const mainReducer = combineReducers({
  profiles: profilesReducer,
});
const store = configureStore({
  reducer: mainReducer,
});
export default store;
