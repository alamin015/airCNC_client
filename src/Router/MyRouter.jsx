import React from 'react';
import {  createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../Pages/Home/Home/Home';
import MainLayout from '../Layouts/MainLayout';
import Register from '../Components/Register/Register';
import Login from '../Login/Login';

const MyRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path:"/",
            element: <Home />
        }
      ]
    },
    {
        path: "/registration",
        element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

export default MyRouter