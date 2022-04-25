import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppRouter from "./app-router/AppRouter";
import "./App.css";
import { setCurrentUser } from "./redux/actions/authActions";
import { auth } from "./utils/firebase";
import "react-toastify/dist/ReactToastify.css";
import { useFetch } from "./utils/dataFunctions";
import { setCurrentBlogs, setIsLoading } from "./redux/actions/blogActions";

function App() {
  const dispatch = useDispatch();
  const { isLoading, blogArray } = useFetch();

  useEffect(() => {
    const userInfo = auth.onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      const userSum = {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
      };

      dispatch(setCurrentUser(userSum));
      dispatch(setCurrentBlogs(blogArray));
      dispatch(setIsLoading(isLoading));
    });
    return userInfo; //! clean-up function
  }, [dispatch, blogArray, isLoading]);

  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
      />
    </div>
  );
}

export default App;
