import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic';
import React from "react";
import { useEffect, useState } from 'react';
import { get } from "@/api-services/index";
import { Category } from '@mui/icons-material';
import { Skeleton } from '@mui/material';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false, // Disable server-side rendering
});
export default function TabSlider({ tabCategory, CategoryData, isloading }) {
    const [activeTab, setActiveTab] = useState(0);

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
                <button className="">
                    <img src='/assets/home/front.png' />
                </button>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
                <button className="">
                    <img src='/assets/home/back.png' />

                </button>
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
                    slidesToShow: 6,
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


    const renderData = () => {
        if (isloading) {
            return tabCategory?.map((tab, index) => (
                <div className="p-4">
                    <button
                        className="tab-item inactive"
                        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                    >
                        <Skeleton variant="circular" width={100} height={100} className="tab-image-skeleton" />
                        <Skeleton variant="text" width={80} height={18} className="f-14 black-text my-4" />
                    </button>
                </div>
            ))
        } else {
            return tabCategory?.map((tab, index) => (
                <div key={tab?.id} className="p-4">
                    <button
                        className={`tab-item ${activeTab === tab?.name ? "active" : "inactive"}`}
                        onClick={() => { CategoryData(tab?.id); setActiveTab(tab?.name); }}
                        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                    >
                        <img src={tab?.imageURL} className="tab-image" />
                        <div className="f-14 black-text my-4">{tab?.name}</div>
                    </button>

                </div>
            ))
        }
    }

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
            <div className="tab flex lg:justify-center md:justify-center sm:justify-center overflow-x-auto gap-4">
            {renderData()}

            </div>
        </>
    )
}