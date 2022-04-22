import { combineReducers } from "redux";
// import fetchReducer from "./fetchReducer";
// import blogReducer from "./blogReducer";
import authReducer from "./authReducer";

const store= ({
//   app: fetchReducer,
//   news: blogReducer,
  auth: authReducer,
});
export default store;
