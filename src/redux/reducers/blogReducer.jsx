import { setCurrentBlogs } from "../actions/blogActions";

const initialState = {
  blogArray: [],
};

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case setCurrentBlogs:
      return { ...state, blogArray: payload };

    default:
      return state;
  }
};

export default blogReducer;
