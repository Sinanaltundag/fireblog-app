
import { SET_CURRENT_BLOGS, SET_IS_LOADING } from "../types/blogTypes";

const initialState = {
  blogList: [],
  isLoading: false,
};

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_BLOGS:
      return { ...state, blogList: payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: payload };

    default:
      return state;
  }
};

export default blogReducer;
