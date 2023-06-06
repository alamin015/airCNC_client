import React from 'react'
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from "react-router-dom";
import './index.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import MyRouter from './Router/MyRouter';
import AuthProvider from './Firebase/AuthProvider';
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <ToastContainer />
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={MyRouter} />
    </HelmetProvider>
    </AuthProvider>
    </div>
  </React.StrictMode>,
)
