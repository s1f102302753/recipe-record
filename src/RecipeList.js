import React, { useState, useEffect } from 'react'

const recipeList = ({ recipes }) => {
    return (
        <div>
            <h3>レシピ集</h3>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index} className="recipe-item">
                        <span className="recipe-name">{recipe.foodName} : </span>
                        <span className="recipe-date">{recipe.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default recipeList