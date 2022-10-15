import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Main";
import CategoryData from "./components/CategoryData";
import MealDetails from "./components/MealDetails";
import Home from "./components/Home";
import SearchDetails from "./components/SearchDetails";
const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      return fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    },
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "category/:categoryName",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
          );
        },
        element: <CategoryData></CategoryData>,
      },
      {
        path: "meal/:mealId",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
          );
        },
        element: <MealDetails></MealDetails>,
      },
      {
        path: "/search",
        loader: async ({ request }) => {
          let url = new URL(request.url);
          let searchTerm = url.searchParams.get("q");
          return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        },
        element: <SearchDetails></SearchDetails>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
