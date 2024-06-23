/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import "../assets/css/MealCard.css";

const Mealcards = ({ detail }) => {
  // console.log(detail);
  return (
    <div className="meals">
      {!detail
        ? ""
        : detail.map((Item) => {
            return (
              <div className="mealImg" key={Item.idMeal}>
                <img src={Item.strMealThumb} alt={Item.strMeal} />
                <p>{Item.strMeal}</p>
                <NavLink to={`/${Item.idMeal}`}>
                  <button>Show Recipe</button>
                  <button>You Tube</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default Mealcards;
