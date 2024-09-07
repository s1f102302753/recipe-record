import React, { useState } from "react";
import AddRecipe from "./AddRecipe";
import RecipeList from "./RecipeList";


function App() {
  const [foodName, setFoodName] = useState("");
  const [date, setDate] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [image, setImage] = useState(null);

  const onChangeFoodName = (e) => {
      setFoodName(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foodName.trim() && date) {
      setRecipes([...recipes, {foodName, date, image}]);
      setFoodName("");
      setDate("");
      setImage(null);
  };
}

  return (
    <>
      <div className="main-area">
        <h1>自炊記録アプリ</h1>
      </div>
      
      <hr />
      <div className="add-recipe">
        <AddRecipe
          foodName={foodName}
          date={date}
          onChangeFoodName={onChangeFoodName}
          onChangeDate={onChangeDate}
          onChangeImage={onChangeImage}
          handleSubmit={handleSubmit}
          image={image}
        />
      </div>

      <hr />
      <div className="recipe-list">
        <RecipeList recipes={ recipes } />
      </div>
    </>
  );
}


export default App;
