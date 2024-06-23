import { useState } from "react";
import Mealcards from "./MealCards";
import "../assets/css/MainPage.css";

function MainPage() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const jsonData = await res.json();
    // console.log(jsonData.meals);
    setData(jsonData.meals);
  };
  // console.log(data);

  return (
    <>
      <h1>Food Recpie App</h1>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter the name of the Dish"
            onChange={handleInput}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          <Mealcards detail={data} />
        </div>
      </div>
    </>
  );
}

export default MainPage;
