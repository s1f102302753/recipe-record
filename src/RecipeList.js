import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
    return (
        <div>
            <h2>レシピ集</h2>
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <div 
                        key={recipe.id}
                        className="recipe-item"
                        style={{ cursor: 'pointer', padding: '10px', border: '1px #add', borderRadius: '5px', marginBotton: '10px' }}
                    >
                        <div className="recipe-name">
                            <h3>
                                <Link to={`/detail/${recipe.id}`} >
                                    <span className="recipe-name">{recipe.foodName}</span>      
                                </Link>
                            </h3>
                            <small className="recipe-date">{recipe.date}</small>
                        </div>

                        {recipe.image && (
                            <img
                                src={recipe.image}
                                alt={recipe.foodName}
                                style={{ width: "200px", height: "200px", objectFit: 'cover', borderRadius: '5px' }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList