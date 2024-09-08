import React, { useState, useEffect } from 'react'

const RecipeList = ({ recipes }) => {
    return (
        <div>
            <h3>レシピ集</h3>
                <div className="recipe-list">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="recipe-item">
                            <p className="recipe-date">{recipe.date}</p>
                            {recipe.image && (
                                <img
                                    src={recipe.image}
                                    alt={recipe.foodName}
                                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                                />
                            )}
                            <span className="recipe-name">{recipe.foodName}</span>
                            
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default RecipeList