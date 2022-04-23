import { combineReducers } from "redux";

import authReducer from "./authReducer";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
  
  blog: blogReducer,
  auth: authReducer,
});
export default rootReducer;