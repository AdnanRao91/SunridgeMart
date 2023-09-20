import React, { useState } from 'react';

function Categories({ categories, selectedCategories, onCategoryChange }) {
    const handleCategoryChange = (category) => {
        const updatedCategories = [...selectedCategories];
        if (updatedCategories.includes(category.id)) {
            updatedCategories.splice(updatedCategories.indexOf(category.id), 1);
        } else {
            updatedCategories.push(category.id);
        }
        onCategoryChange(updatedCategories);
    };

    return (
        <div className="mt-1">
            {categories.map((category) => (
                <div>
                    <label key={category.id}>
                        <input
                            type="checkbox"
                            value={category.id}
                            checked={selectedCategories.includes(category.id)}
                            onChange={() => handleCategoryChange(category)}
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
