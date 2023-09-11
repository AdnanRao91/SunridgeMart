import { useState } from 'react';
import AccordionItem from '../../Accordian';
import RangeSlider from '../../Filter/RangeSlider';
import Categories from '../../Filter/Categories';
import { brandsData, categoriesData } from '../../../data';

function SideFilter() {
    const [openIndex, setOpenIndex] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const toggleAccordion = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    const handlePriceRangeChange = (event, value) => {
        setPriceRange(value);
    };

    const handleCategoriesChange = (categories) => {
        setSelectedCategories(categories);
    };

    const handleBrandsChange = (categories) => {
        setSelectedBrands(categories);
    };


    const accordionData = [
        {
            id: 1,
            content: (
                <RangeSlider
                    priceRange={priceRange}
                    handleChange={handlePriceRangeChange}
                />
            ),
            title: 'Price'
        },
        {
            id: 2,
            content: (
                <Categories
                    categories={categoriesData}
                    selectedCategories={selectedCategories}
                    onCategoryChange={handleCategoriesChange}
                />
            ),
            title: 'Categories'
        },
        {
            id: 3,
            content: (
                <Categories
                    categories={brandsData}
                    selectedCategories={selectedBrands}
                    onCategoryChange={handleBrandsChange}
                />
            ),
            title: 'Brands'
        },
    ];


    return (
        <div className="container">
            {accordionData.map((item, index) => (
                <AccordionItem
                    key={item.id}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => toggleAccordion(index)}
                    content={item.content}
                />
            ))}
        </div>
    );
}

export default SideFilter;
