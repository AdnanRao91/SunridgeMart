import React, { useState } from 'react';

function Categories({ categories, selectedCategories, onCategoryChange, label }) {
    const handleCategoryChange = (category) => {
        const updatedCategories = [...selectedCategories];
        const categoryIndex = updatedCategories.findIndex((item) => item.value == category.id);

        if (categoryIndex !== -1) {
            // Category already selected, so remove it
            updatedCategories.splice(categoryIndex, 1);
        } else {
            // Category not selected, so add it
            updatedCategories.push({
                key: label,
                value: category.id.toString()
            });
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
                            checked={selectedCategories.find((item) => item.value == category.id)}
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
