import MainPage from "./components/MainPage";

import { Routes, Route } from "react-router-dom";
import Mealinfo from "./components/MealInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:mealId" element={<Mealinfo />} />
      </Routes>
    </div>
  );
}

export default App;
