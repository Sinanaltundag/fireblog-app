import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Navbar from "../components/Navbar"
import Register from '../pages/Register'
import About from '../pages/About'
import Page404 from '../helpers/Page404'
import PrivateRouter from './PrivateRouter'
import Details from '../pages/Details'
import Profile from '../pages/Profile'
import ConfigureBlog from '../pages/ConfigureBlog'


const AppRouter = () => {
  


  return (
    <>
<Navbar/>

<Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/details" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
        <Route path="/new-blog" element={<PrivateRouter />}>
          <Route path="" element={<ConfigureBlog />} />
        </Route>
        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
       

        <Route path="*" element={<Page404 />} />
      </Routes>

    </>
  )
}

export default AppRouter