import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({categories}) => {
    // console.log(categories)
    return (
        <div>
            <ul className='category-list'>
                {
                    categories.map(category => <li key={category.idCategory}><Link key={category.idCategory} to={`category/${category.strCategory}`}>{category.strCategory}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default SideBar;