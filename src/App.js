import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppRouter from "./app-router/AppRouter";
import "./App.css";
import { setCurrentUser } from "./redux/actions/authActions";
import { auth } from "./utils/firebase";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo =  auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user?.email));
    });
    return userInfo; //! clean-up function
  }, [dispatch]);


  return (
    <div className="App">
    
      <BrowserRouter>
        <AppRouter />
        <ToastContainer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
