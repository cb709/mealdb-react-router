import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = ({categories}) => {
    // console.log(categories)
    return (
        <div>
            <ul className='category-list'>
                {
                    categories.map(category => <li key={category.idCategory}><NavLink key={category.idCategory} to={`category/${category.strCategory}`}  className={({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : ""
                  }>{category.strCategory}</NavLink></li>)
                }
            </ul>
        </div>
    );
};

export default SideBar;