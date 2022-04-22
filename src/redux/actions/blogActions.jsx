import { DELETE_BLOG_ITEM, SET_BLOG_ITEM, UPDATE_BLOG_ITEM } from "../types/blogTypes";


export const setBlogItem = (blog) => ({
  type: SET_BLOG_ITEM,
  payload: blog,
});

export const deleteBlogItem = () => ({
  type: DELETE_BLOG_ITEM,
});
export const updateBlogItem = () => ({
  type: UPDATE_BLOG_ITEM,
});
