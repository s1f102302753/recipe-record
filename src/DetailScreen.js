import React from 'react'
import { useParams, useNavigate } from "react-router-dom";

const DetailScreen = ({ recipes }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const selectedRecipe = recipes.find((recipe) => recipe.id === id);

    //レシピの情報を取得して表示する処理を追加
    return (
        <div>
            <h3>レシピの詳細</h3>
            <p>{selectedRecipe.date}</p>
            {selectedRecipe ? (
                <>
                    {selectedRecipe.image && (
                        <img
                            src={selectedRecipe.image}
                            alt={selectedRecipe.foodName}
                            style={{ width: "200px", height: "200px" }}
                        />
                    )}
                </>

            ) : (
                <p>レシピが見つかりません。</p>
            )}
            <button onClick={() => navigate(-1)}>
                戻る
            </button>
        </div>
    );
};


export default DetailScreen;