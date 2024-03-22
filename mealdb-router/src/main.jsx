import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Foods from './components/Foods/Foods.jsx';
import Category from './components/Category/Category.jsx';
import CategoryDetails from './components/CategoryDetails/CategoryDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/foods',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Foods></Foods>
      },
      {
        path: '/food/:category',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`),
        element: <CategoryDetails></CategoryDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
