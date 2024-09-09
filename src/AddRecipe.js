import React, { useState } from 'react';

const AddRecipe = ({ foodName, date, image, onChangeFoodName, onChangeDate, onChangeImage, handleSubmit, fileInputKey }) => {
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
                    key={fileInputKey}
                    type="file"
                    accept="image/*"
                    onChange={onChangeImage}
                />
                {image && <img src={image} alt="upload file" style={{ width: "100px", height: "100px" }} />}
                <br></br>
                <button type="submit">登録</button>
            </form>
        </div>
    );
};

export default AddRecipe;