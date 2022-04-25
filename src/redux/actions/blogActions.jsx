import { SET_CURRENT_BLOGS, SET_IS_LOADING } from "../types/blogTypes";



export const setCurrentBlogs = (payload) => ({
  type: SET_CURRENT_BLOGS,
  payload,
})
export const setIsLoading = (payload) => ({
  type: SET_IS_LOADING,
  payload,
})
