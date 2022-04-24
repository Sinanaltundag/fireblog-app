import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppRouter from "./app-router/AppRouter";
import "./App.css";
import { setCurrentUser } from "./redux/actions/authActions";
import { auth } from "./utils/firebase";
import 'react-toastify/dist/ReactToastify.css';

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
