import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const { idMeal, strMealThumb, strMeal } = meal;
  return (
    <div className="meal-card">
      <div>
        <img src={strMealThumb} alt=""/>
        <h3>{strMeal}</h3>
      </div>
      <Link to={`/meal/${idMeal}`}>See Details</Link>
    </div>
  );
};

export default Meal;
