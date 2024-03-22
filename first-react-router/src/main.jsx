import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Profile from './components/Profile/Profile.jsx';
import User from './components/User/User.jsx';
import Userinfo from './components/Userinfo/Userinfo.jsx';
import Posts from './components/Posts/Posts.jsx';
import Postsingle from './components/Postsingle/Postsingle.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
        
      },
      {
        path: '/users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Userinfo></Userinfo>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts/'),
        element: <Posts></Posts>
      },

      {
        path: '/post/:postId', 
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <Postsingle></Postsingle>
     
        

        
      }
      
      
        
      
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
