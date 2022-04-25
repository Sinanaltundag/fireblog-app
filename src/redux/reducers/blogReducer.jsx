
import { SET_CURRENT_BLOGS } from "../types/blogTypes";

const initialState = {
  blogList: [],
};

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_BLOGS:
      return { ...state, blogList: payload };

    default:
      return state;
  }
};

export default blogReducer;
