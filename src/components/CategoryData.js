import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryData = () => {
    const {meals} = useLoaderData()
    console.log(meals)
    return (
        <div>
            <h3>This is the category data: {meals.length}</h3>
        </div>
    );
};

export default CategoryData;