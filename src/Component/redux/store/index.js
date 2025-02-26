import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilesReducer from "../reducers/profilesReducer";
import userReducer from "../reducers/userReducers";
import newsReducer from "../reducers/newsReducer";
import otherUserReducer from "../reducers/otherUserReducer";

const mainReducer = combineReducers({
  profiles: profilesReducer,
  user: userReducer,
  otherUser: otherUserReducer,
  news: newsReducer,
});
const store = configureStore({
  reducer: mainReducer,
});
export default store;
