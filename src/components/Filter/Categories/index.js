import React, { useState } from 'react';

function Categories({ categories, selectedCategories, onCategoryChange }) {
    const handleCategoryChange = (category) => {
        const updatedCategories = [...selectedCategories];
        if (updatedCategories.includes(category)) {
            updatedCategories.splice(updatedCategories.indexOf(category), 1);
        } else {
            updatedCategories.push(category);
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
                            value={category.value}
                            checked={selectedCategories.includes(category.value)}
                            onChange={() => handleCategoryChange(category.value)}
                            className="mr-2"
                        />
                        {category.label}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default Categories;
