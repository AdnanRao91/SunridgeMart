import { useState } from 'react';
import AccordionItem from '../../Accordian';
import RangeSlider from '../../Filter/RangeSlider';
import Categories from '../../Filter/Categories';
import { brandsData, categoriesData } from '../../../data';

function SideFilter({ categoryList, brands, getProducts, payload, setPayload, setCurrentPage, setLimit }) {
    const [openIndex, setOpenIndex] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [apiData, setApiData] = useState([])


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

    const handlePriceRangeCommited = (event, value) => {
        // let payload = {
        //     "filterBrandArray": selectedBrands,
        //     "filterCategoryArray": selectedCategories,
        //     "priceRange": {
        //         "priceFrom": value[0],
        //         "priceTo": value[1]
        //     }
        // }
        setCurrentPage(0)
        setLimit(10)
        let temp = { ...payload }
        temp.priceRange = {
            "priceFrom": value[0],
            "priceTo": value[1]
        }
        setPayload(temp)
        getProducts(temp)
    };

    const handleCategoriesChange = (categories) => {
        // let payload = {
        //     "filterBrandArray": selectedBrands,
        //     "filterCategoryArray": categories,
        //     "priceRange": {
        //         "priceFrom": priceRange[0],
        //         "priceTo": priceRange[1]
        //     }
        // }
        setCurrentPage(0)
        setLimit(10)
        let temp = { ...payload }
        temp.filterCategoryArray = categories,
            setPayload(temp)
        getProducts(temp)
        setSelectedCategories(categories);
    };

    const handleBrandsChange = (categories) => {
        // let payload = {
        //     "filterCategoryArray": selectedCategories,
        //     "filterBrandArray": categories,
        //     "priceRange": {
        //         "priceFrom": priceRange[0],
        //         "priceTo": priceRange[1]
        //     }
        // }
        setCurrentPage(0)
        setLimit(10)
        let temp = { ...payload }
        temp.filterBrandArray = categories,
            setPayload(temp)
        getProducts(temp)
        setSelectedBrands(categories);
    };


    const accordionData = [
        {
            id: 1,
            content: (
                <RangeSlider
                    priceRange={priceRange}
                    handleChange={handlePriceRangeChange}
                    handlePriceRangeCommited={handlePriceRangeCommited}
                />
            ),
            title: 'Price'
        },
        {
            id: 2,
            content: (
                <Categories
                    categories={categoryList}
                    selectedCategories={selectedCategories} // Pass the function here, not the array
                    onCategoryChange={handleCategoriesChange}
                    label="category"
                />
            ),
            title: 'Categories'
        },
        {
            id: 3,
            content: (
                <Categories
                    categories={brands}
                    selectedCategories={selectedBrands} // Pass the function here, not the array
                    onCategoryChange={handleBrandsChange}
                    label="brand"
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
