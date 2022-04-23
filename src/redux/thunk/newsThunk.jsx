
// import { setLoading, clearLoading } from "../actions/appActions";

import { useFetch } from "../../utils/dataFunctions";
import { setCurrentBlogs } from "../actions/blogActions";




//! getNews fonksiyonu başka bir fonksiyonu döndürüyor. Bu durumda çağırırken dispatch(getNews()) şeklinde kullanmak gerekir.
export const getBlogs = () => {
  return  (dispatch) => {
    try {
      // dispatch(setLoading());
      const {blogArray} =  useFetch();
      dispatch(setCurrentBlogs(blogArray));
    } catch (error) {
      console.log(error);
    } finally {
      // dispatch(clearLoading());
    }
  };
};

//! bu kullanımda getNew bir değişken gibi düşünülebilir. Dolayısıyla, View tarafında dispatch(getNews) şeklinde çağrılır.
// export const getNews = async (dispatch, getState) => {
//   try {
//     dispatch(setLoading());
//     const { data } = await axios.get(url);
//     const newsState = getState();
//     console.log(newsState);
//     dispatch(setNewsList(data.articles));
//   } catch (error) {
//     console.log(error);
//   } finally {
//     dispatch(clearLoading());
//   }
// };
