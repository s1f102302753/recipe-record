import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";

const DetailScreen = ({ recipes }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const selectedRecipe = recipes.find((recipe) => recipe.id === id);

    //ローカルストレージから初期文を取得
    const [comment, setComment] = useState(selectedRecipe.comment || "");   //コメント入力
    const storedComment = localStorage.getItem(`recipe-${id}-comment`);

    //コメントが変更されたときにローカルストレージに保存する
    const handleCommentChange = (e) => {
        const newComment = e.target.value;
        setComment(newComment);
        localStorage.setItem(`recipe-${id}-comment`, newComment);   //ローカルストレージに保存
    };

    useEffect(() => {
        const storedData = localStorage.getItem(`recipe-${id}-comment`);
        if (storedData) {
            setComment(storedData);
        }
    }, [id]);


    //レシピの情報を取得して表示する処理を追加
    return (
        <div className='detail'>
            <h2>レシピの詳細</h2>
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

            

            <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="コメント"
                style={{ width: "100%", height: "100px"}}
            />

            <br></br>
            <button onClick={() => navigate(-1)}>
                戻る
            </button>
        </div>
    );
};


export default DetailScreen;