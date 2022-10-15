import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const meal = useLoaderData();
  console.log(meal)
  const {
    strMeal: name,
    strMealThumb: img,
    strCategory: category,
    strInstructions: instructions,
    strSource: source,
    strYoutube: youtube,
  } = meal.meals[0];

  return (
    <div className="meal-details">
      <h3>{name}</h3>
      <p className="category">Category: {category}</p>
      <img className="meal-image" src={img} alt={name} />
      <p className="insturctions">{instructions}</p>
      <i>
        Source:{" "}
        <a href={source} target="blank">
          {source}
        </a>
      </i>
      <a className="youtube-btn" href={youtube} target="blank">
        See on YouTube
      </a>
    </div>
  );
};

export default MealDetails;
