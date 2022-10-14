import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from './Meal';

const CategoryData = () => {
    const {meals} = useLoaderData()
    return (
        <div className='meals-container'>
            {
                meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
            }
        </div>
    );
};

export default CategoryData;