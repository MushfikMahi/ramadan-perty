import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Me from './components/me.jsx';
import Header from './components/header.jsx';
import Banner from './components/banner.jsx';
import ShowTheStudent from './components/ShowTheStudent.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Header></Header>,
    children: [
      {
        path: "/",
        element:<Banner></Banner>
      },
      {
        path: "/about",
        element: <Me></Me>
      },
      {
        path: "/student",
        loader: async ()=> await fetch('https://script.google.com/macros/s/AKfycbxx2h2xTxyWOe_IL37GiYHxOfmCdeM6DU86fRXKjzwKngfrtZ5YZ3FNdo921OyowVkW/exec'),
        element: <ShowTheStudent></ShowTheStudent>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
