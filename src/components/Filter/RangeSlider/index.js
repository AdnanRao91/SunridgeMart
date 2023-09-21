import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider({ priceRange, handleChange, handlePriceRangeCommited }) {

    return (
        <Box sx={{ width: "100%", margin: "0 auto" }}>
            <h3 className='text-center'>{priceRange[0]}-{priceRange[1]}</h3>
            <Slider
                value={priceRange}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={2000}
                onChangeCommitted={handlePriceRangeCommited}
            />
        </Box>
    );
}