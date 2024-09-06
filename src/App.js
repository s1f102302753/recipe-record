import React, { useState } from "react";

function App() {
  const [foodName, setFoodName] = useState([]);
  const [recipe, setRecipe] = useState("");

  const onChangeFoodName = (e) => {
    setFoodName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("料理:", foodName);
    setFoodName("");
  };

  return (
    <>
      <div className="main-area">
        <h1>レシピ記録</h1>
      </div>

      <div className="add-recipe">
        <h3>レシピ追加</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={foodName}
            onChange={onChangeFoodName}
            placeholder="料理名を登録"
          />
          <button type="submit">登録</button>
        </form>
      </div>
    </>
  );
}


export default App;
