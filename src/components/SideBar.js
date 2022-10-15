import React from "react";
import { NavLink } from "react-router-dom";
import { Form } from "react-router-dom";

const SideBar = ({ categories }) => {
  // console.log(categories)
  return (
    <div className="sidebar-inner">
      <ul className="category-list">
        <Form method="get" action="/search">
          <input aria-label="search products" type="text" name="q" />
          <button type="submit">Search</button>
        </Form>
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
  );
};

export default SideBar;
