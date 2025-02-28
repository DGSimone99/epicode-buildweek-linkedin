import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilesReducer from "../reducers/profilesReducer";
import userReducer from "../reducers/userReducers";
import newsReducer from "../reducers/newsReducer";
import otherUserReducer from "../reducers/otherUserReducer";
import experienceReducer from "../reducers/experienceReducer";
import postReducer from "../reducers/postReducer";
import jobsReducer from "../reducers/jobsReducer";
import commentsReducer from "../reducers/commentsReducer";

const mainReducer = combineReducers({
  profiles: profilesReducer,
  user: userReducer,
  otherUser: otherUserReducer,
  news: newsReducer,
  experiences: experienceReducer,
  post: postReducer,
  jobs: jobsReducer,
  comments: commentsReducer,
});
const store = configureStore({
  reducer: mainReducer,
});
export default store;
