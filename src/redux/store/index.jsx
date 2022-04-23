import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from "../reducers";
// import { createStore } from "redux";
import authReducer from '../reducers/authReducer';
import blogReducer from '../reducers/blogReducer';

const reducer= {
    auth: authReducer,
    blog: blogReducer,
}

export default  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
   
});



