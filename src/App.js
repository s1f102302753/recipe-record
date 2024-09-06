import React, { useState } from "react";
import RecipeList from "./RecipeList";

function App() {
  const [foodName, setFoodName] = useState("");
  const [date, setDate] = useState("");
  const [recipes, setRecipes] = useState([]);

  const onChangeFoodName = (e) => {
    setFoodName(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foodName.trim() && date) {
      setRecipes([...recipes, {foodName, date}]);
      setFoodName("");
      setDate("");
    }
  };

  return (
    <>
      <div className="main-area">
        <h1>レシピ記録</h1>
      </div>
      
      <hr />
      <div className="add-recipe">
        <h3>レシピ追加</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={foodName}
            onChange={onChangeFoodName}
            placeholder="料理名を登録"
          />
          <small>日付</small>
          <input
            type="date"
            value={date}
            onChange={onChangeDate}
          />
          <button type="submit">登録</button>
        </form>
      </div>

      <hr />
      <div className="recipe-list">
        <RecipeList recipes={ recipes } />
      </div>
    </>
  );
}


export default App;
