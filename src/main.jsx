import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Component/Main/Main.jsx';
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from './Component/NotFound/NotFound.jsx';
import AuthProvider from './Component/AuthProvider/AuthProvider.jsx';
import Instructor from './Component/Instructor/Instructor.jsx';
import Classes from './Component/Classes/Classes.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import EnrolledClass from './Dashboard/Student/EnrolledClass';
import SelectedClass from './Dashboard/Student/SelectedClass';
import PaymentHistory from './Dashboard/Student/PaymentHistory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      { 
        path: '/instructors',
        element: <Instructor></Instructor>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
    ]
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard/enrollClass',
        element:<EnrolledClass></EnrolledClass>
      },
      {
        path:'/dashboard/selectedClass',
        element:<SelectedClass></SelectedClass>
      },
      {
        path:'/dashboard/history',
        element:<PaymentHistory></PaymentHistory>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>

    </AuthProvider>
  </React.StrictMode>,
)
