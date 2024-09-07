import React, { useState } from 'react'

const AddRecipe = ({ foodName, date, image, onChangeFoodName, onChangeDate, onChangeImage, handleSubmit }) => {
    return (
        <div className='add-recipe'>
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
                <input
                    type="file"
                    accept="image/*"
                    onChange={onChangeImage}
                    placeholder="写真を追加"
                />
                {image && <img src={image} alt="upload file" style={{ width: "100px", height: "100px" }} />}
                <button type="submit">登録</button>
            </form>
        </div>
    );
};

export default AddRecipe