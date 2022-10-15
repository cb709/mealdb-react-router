import { useLoaderData } from 'react-router-dom';

const SearchDetails = () => {
    const foods =  useLoaderData()
    console.log(foods);
    return (
        <div>
            <h2>THis is search dettails {foods.meals.length} </h2>
        </div>
    );
};

export default SearchDetails;