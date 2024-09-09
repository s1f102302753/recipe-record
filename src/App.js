import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AddRecipe from "./AddRecipe";
import RecipeList from "./RecipeList";
import DetailScreen from "./DetailScreen";


function App() {
  const [foodName, setFoodName] = useState("");
  const [date, setDate] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [image, setImage] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const onChangeFoodName = (e) => {
      setFoodName(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (image) {
        URL.revokeObjectURL(image);
      }
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foodName.trim() && date) {
      setRecipes([...recipes, {id: uuidv4(), foodName, date, image}]);
      setFoodName("");
      setDate("");
      setImage(null);
      setFileInputKey(Date.now());
    };
  }

  return (
    <BrowserRouter>
      <div className="main-area">
        <h1>自炊記録アプリ</h1>

        <AddRecipe
          foodName={foodName}
          date={date}
          onChangeFoodName={onChangeFoodName}
          onChangeDate={onChangeDate}
          onChangeImage={onChangeImage}
          handleSubmit={handleSubmit}
          image={image}
          fileInputKey={fileInputKey}
        />

      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} />} />
        <Route path="/detail/:id" element={<DetailScreen recipes={recipes} />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
