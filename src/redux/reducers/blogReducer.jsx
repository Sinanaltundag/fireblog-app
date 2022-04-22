import { deleteBlogItem, setBlogItem, updateBlogItem } from "../actions/blogActions";

const initialState = {
  blogList: [
    {
      title: "deneme",
      img:"https://picsum.photos/200/300",
      author: "eykani@gmail.com",
      date: "May 17, 2021",
      like:1,
      comment:2,

    },
  ],
};

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case setBlogItem:
      return { ...state, blogList:payload };
    case deleteBlogItem:
      return { ...state, blogList:payload };
    case updateBlogItem:
      return { ...state, blogList:payload };

    default:
      return state;
  }
};

export default blogReducer;