/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../assets/css/MealCard.css";

const Mealcards = ({ detail }) => {
  return (
    <div className="meals">
      {!detail
        ? ""
        : detail.map((Item) => {
            return (
              <div className="mealImg" key={Item.idMeal}>
                <img src={Item.strMealThumb} alt={Item.strMeal} />
                <p>{Item.strMeal}</p>
                <Link to={`/${Item.idMeal}`}>
                  <button>Show Recipe</button>
                </Link>
              </div>
            );
          })}
    </div>
  );
};

export default Mealcards;
