import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppRouter from "./app-router/AppRouter";
import "./App.css";
import { clearCurrentUser, setCurrentUser } from "./redux/actions/authActions";
import { auth } from "./utils/firebase";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [userSum, setUserSum] = useState()
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = auth.onAuthStateChanged((user) => {
      
        const userSum = {
          email: user.email,
          displayName: user.displayName,
          uid: user.uid,
        };
     
      dispatch(setCurrentUser(userSum));
    });
    return userInfo; //! clean-up function
  }, [dispatch]);

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
