import React, { useState } from 'react';

function Categories({ categories, selectedCategories, selecteds, onCategoryChange }) {
    // const handleCategoryChange = (category) => {
    //     const updatedCategories = [...selecteds];
    //     if (updatedCategories.includes(category.id)) {
    //         updatedCategories.splice(updatedCategories.indexOf(category.id), 1);
    //     } else {
    //         updatedCategories.push(category.id);
    //     }
    //     onCategoryChange(updatedCategories);
    // };

    return (
        <div className="mt-1">
            {categories.map((category) => (
                <div>
                    <label key={category.id}>
                    <input
                            type="checkbox"
                            value={category.id}
                            checked={selecteds(category.id)}
                            onChange={() => selecteds(category.id)}
                            className="mr-2"
                        />
                        {category?.name}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default Categories;
