import React from "react"
import Image from "next/image"
// import { useEffect } from 'react';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
export default function FeaturedProject({data}){
    // useEffect(() => {
    //     // Check if window is defined (to avoid server-side rendering errors)
    //     if (typeof window !== 'undefined') {
    //       // Initialize Owl Carousel
    //       $('.owl-carousel').owlCarousel({
    //         items: 3,
    //         loop: true,
    //         margin: 10,
    //         // Add any other options you need
    //       });
    //     }
    //   }, []);
    return(
  <div className="owl-carousel">
    <div className="product-card-container item">
            <div className="product-image">
                <Image src={data.image} width={94} height={147} style={{ margin: "0 auto", objectFit: "cover" }} />
                <div className='discount-container'>
                    <h2 className='f-16 proxima-regular text-white'>{data.discount}%</h2>
                </div>
            </div>
            <div className='content-container'>
                <h3 className='f-14 proxima-regular text-light-black'>{data.category.title}</h3>
                <h3 className='f-18 nova-bold text-light-black mt-1'>{data.title}</h3>
                <div className='flex justify-center gap-2 items-center mt-1'>
                    <Image src="/assets/home/star.png" width={20} height={18} />
                    <h3 className='josefin-sans-regular f-16'>{data.rating}</h3>
                </div>
                <div className='flex justify-between mt-2'>
                    <h3 className='text-color-orange josefin-sans-bold f-18'>PKR{data.price}</h3>
                    <h3 className='text-light-black josefin-sans-regular f-18 line-through'>PKR 640</h3>
                </div>
                <div className='flex justify-center gap-3 items-center mt-2'>
                    <div className='icon-container'>
                        <Image src="/assets/home/heart.png" width={20} height={20} />
                    </div>
                    <div className='icon-container'>
                        <Image src="/assets/home/bag.png" width={20} height={20} />
                    </div>
                </div>
            </div>
        </div>
  </div>
    )
}