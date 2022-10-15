import React from "react";
import { NavLink } from "react-router-dom";
import { Form } from "react-router-dom";

const SideBar = ({ categories }) => {
  // console.log(categories)
  return (
    <div className="sidebar-inner">
      <div className="search">
      <Form method="get" action="/search">
          <div className="search-box">
            <input className="search-input" aria-label="search products" type="text" name="q" />
            <button  className="search-btn" type="submit">Search</button>
          </div>
        </Form>
      </div>
     <div className="categories-container">
      <h3 className="categories-title">All Categories</h3>
     <ul className="category-list">
        {categories.map((category) => (
          <li key={category.idCategory}>
            <NavLink
              key={category.idCategory}
              to={`category/${category.strCategory}`}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              {category.strCategory}
            </NavLink>
          </li>
        ))}
      </ul>
     </div>
    </div>
  );
};

export default SideBar;
