var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
import Image from "next/image";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false, // Disable server-side rendering
});
export default function CustomerReview({ review }) {
    const options = {
        items: 4,
        nav: true,
        autoplay: true,
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
        <>
            <div className="relative">
                <div className="exculsive-section my-12">
                    <div className="grid">
                        <div className="col-span-6 background-exculsive">
                            <div className="text-center relative">
                                <div className="flex justify-center items-center">
                                    <img src="/assets/home/image-leave.png" />
                                </div>
                                <div className="ineer-page-heading exculsive-deals">
                                    CUSTOMER REVIEWS
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="customer-review-bg-img px-20 py-16">
                    <div className="flex justify-center">
                        <img src="/assets/home/right.png" />
                    </div>

                    <div className="customer-review">
                        <OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
                            {
                                review.map((item, index) => {
                                    return (
                                        <div key={item.id} className={`${'mt-4'} item`}>
                                            <div className="box-review col-span-1 text-center">
                                                <div className="review-img flex justify-center">
                                                    <img src={item.imageUrl} />
                                                </div>
                                                <div className="review-comment proxima-regular f-18 text-light-black">
                                                    {item.comment}
                                                </div>
                                                <div className="review-name black-text f-18 nova-bold uppercase mt-4">
                                                    {item.name}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>
                <div className="wheat-img">
                    <Image src="/assets/home/wheat-rice.png" width={420} height={0} alt="wheat" />
                </div>
            </div>
        </>
    )
}