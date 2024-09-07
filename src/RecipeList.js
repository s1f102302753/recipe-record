import React, { useState, useEffect } from 'react'

const recipeList = ({ recipes }) => {
    return (
        <div>
            <h3>レシピ集</h3>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index} className="recipe-item">
                        <span className="recipe-name">{recipe.foodName}</span>
                        {recipe.image && (
                            <img
                                src={recipe.image}
                                alt={recipe.foodName}
                                style={{ maxWidth: "100px", maxHeight: "100px" }}
                            />
                        )}
                        <p><small className="recipe-date">{recipe.date}</small></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default recipeList