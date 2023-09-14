import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic';
import React from "react";
import { useState } from "react";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false, // Disable server-side rendering
});
export default function TabSlider({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: tabs.length,
        slidesToScroll: 1,
        initialSlide: activeTab,
        beforeChange: (curent, next) => setActiveTab(next),
      };
    return (
        <>
            <div className="exculsive-section my-12">
                <div className="grid">
                    <div className="col-span-6 background-exculsive">
                        <div className="text-center relative">
                            <div className="flex justify-center items-center">
                                <img src="/assets/home/image-leave.png" />
                            </div>
                            <div className="ineer-page-heading exculsive-deals">
                                PRODUCT CATEGORIES
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="tab">
                <ul className="tab-list flex text-center justify-between gap-4">
                    {tabs.map((tab, index) => (
                        <li
                            key={index}
                            className={`tab-item ${activeTab === index ? "active" : "inactive"}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <img src={tab.image} className="tab-image" />
                            <div className="f-14 black-text my-4">{tab.name}</div>
                        </li>
                    ))}
     
                </ul>
            </div>
        </>
    )
}