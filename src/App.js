import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppRouter from "./app-router/AppRouter";
import "./App.css";
import { setCurrentUser } from "./redux/actions/authActions";
import { auth } from "./utils/firebase";
import "react-toastify/dist/ReactToastify.css";
import { useFetch } from "./utils/dataFunctions";
import { setCurrentBlogs } from "./redux/actions/blogActions";

function App() {
  const dispatch = useDispatch();
  // const [u, setU] = useState(second)
  const { isLoading, blogArray } = useFetch();
  useEffect(() => {
    const userInfo = auth.onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
   
      const userSum = {
        email: user.email,
        displayName: user.displayName,
        uid: user.uid,
      };

      dispatch(setCurrentUser(userSum));
      dispatch(setCurrentBlogs(blogArray));
    });
    return userInfo; //! clean-up function
  }, [dispatch,blogArray]);
  
  console.log(blogArray)
 

 
  // const blogs = useSelector(state=>state.blog);
  // console.log(blogs)

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
