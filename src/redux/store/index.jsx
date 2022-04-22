import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from "../reducers";
// import { createStore } from "redux";
import authReducer from '../reducers/authReducer';
import blogReducer from '../reducers/blogReducer';



export default  configureStore({
    reducer: {
        auth: authReducer,
        blog: blogReducer,
    }
});



