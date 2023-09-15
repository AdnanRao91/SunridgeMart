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
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
                <button className="px-4 py-2 border bg-gray-200 hover:bg-gray-300">Next</button>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
                <button className="px-4 py-2 border bg-gray-200 hover.bg-gray-300">Prev</button>
            </div>
        );
    };
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
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
                {/* <ul className="tab-list flex text-center justify-between gap-4">
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
     
                </ul> */}
                <Slider {...settings}>
                    {tabs.map((tab, index) => (
                        <div key={index} className="p-4">
                            <button
                                className={`tab-item ${activeTab === index ? "active" : "inactive"}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <img src={tab.image} className="tab-image" />
                            <div className="f-14 black-text my-4">{tab.name}</div>
                            </button>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}