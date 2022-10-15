import { useLoaderData } from 'react-router-dom';
import Meal from './Meal';

const SearchDetails = () => {
    const data =  useLoaderData()
    const meals = data.meals;
    console.log(meals)
    return (
        <div className='meals-container'>
            {
                meals.map(meal => <Meal meal={meal}></Meal>)
            }
        </div>
    );
};

export default SearchDetails;