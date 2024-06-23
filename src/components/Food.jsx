import { useState } from "react";
import Cards from "./Cards";

function Food() {
  const [search, setSearch] = useState();
  const [data, setData] = useState();

  const handleInput = (e) => {
    e.preventDefault();
    setSearch();
  };

  const myFun = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const jsonData = await get.json();
    console.log(jsonData.meals);
    setData(jsonData.meals);
  };
  return (
    <>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search Meals"
            value={(e) => e.target.value}
            onChange={handleInput}
          />
          <button onClick={myFun}>Search</button>
        </div>
        <div>
          <Cards detail={data} />
        </div>
      </div>
    </>
  );
}
export default Food;
