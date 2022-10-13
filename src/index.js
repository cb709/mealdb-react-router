import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './components/Main';
import CategoryData from './components/CategoryData';
const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    },
    element: <Main></Main>,
    children: [
      {
        path: 'category/:categoryName',
        loader: async ({params}) => {
          return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`)
        },
        element: <CategoryData></CategoryData>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);