import { SET_CURRENT_BLOGS } from "../types/blogTypes";



export const setCurrentBlogs = (blogArray) => ({
  type: SET_CURRENT_BLOGS,
  payload:blogArray,
})
