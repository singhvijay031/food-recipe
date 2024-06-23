/* eslint-disable react/no-unescaped-entities */
import "../assets/css/MealInfo.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Mealinfo = () => {
  const { mealId } = useParams();
  const [info, setInfo] = useState();

  // console.log(mealId);

  const getInfo = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await res.json();
    // console.log(data.meals[0]);
    setInfo(data.meals[0]);
  };
  if (info != "") {
    getInfo();
  }
  return (
    <div>
      {!info ? (
        "Data Not Found"
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} />
          <div className="info">
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instruction's</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
