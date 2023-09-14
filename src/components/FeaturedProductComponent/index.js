var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");

}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { featuredProducts } from '@/data';
// import ProductCard from "../ProductCard"
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import ProductCard from '../ProductCard';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false, // Disable server-side rendering
});

export default function FeaturedProductcomponent() {
    const options = {
        items: 3,
        nav: true,
        autoplay:true,
        navText: [
            `<div className='nav-btn prev-slide'><img src='/assets/home/slider-arrow-left.png' width="100%" /></div>`,
            `<div className='nav-btn next-slide'><img src='/assets/home/slider-arrow-right.png' width="100%" /></div>`,
        ],
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        },
        dots: false
    };


    return (
        <div style={{ position: "relative" }}>
            <div className="exculsive-section product-category-bg-img  mt-12 px-20">
                <div className="grid">
                    <div className="col-span-6 background-exculsive">
                        <div className="text-center relative">
                            <div className="flex justify-center items-center">
                                <img src="/assets/home/image-leave.png" />
                            </div>
                            <div className="ineer-page-heading exculsive-deals">
                                Featured Project
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider-style feature-product-owl'>
                    <OwlCarousel className="owl-theme pb-24" loop margin={10} nav {...options}>
                        {featuredProducts.map((item, index) => {
                            return (
                                <div key={item.id} className={`${'mt-24'}`}>
                                    <ProductCard data={item} />
                                </div>
                            )
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}