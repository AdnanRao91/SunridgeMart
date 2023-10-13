import React from "react"
import { useEffect, useState } from 'react';
import Image from "next/image"
import TimeCount from "../timeCount"
import { get } from "@/api-services/index"
import { endPoints } from "@/constants";


export default function Exculsive() {
    const [data, setData] = useState(null);

    useEffect(() => {
      get(endPoints.getAllBrands)
        .then((response) => {
          setData(response);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    return (
        <div className="exculsive-img-background lg:px-20 lg:mt-44 xs:mt-16 sm:mt-16 sm:px-10 xs:px-4 md:mt-16 md:px-10">
            <div className="exculsive-section my-12">
                <div className="lg:grid">
                    <div className="col-span-6 background-exculsive">
                        <div className="text-center relative">
                            <div className="flex justify-center items-center">
                                <img src="/assets/home/image-leave.png" />
                            </div>
                            <div className="ineer-page-heading exculsive-deals">
                                Exculsive Deals
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex grid lg:grid-cols-6 md:grid-cols-6 gap-2">
                <div className="col-span-2 col-exclusive">
                    <div className="flex justify-between colum-reverse-exculsive">
                        <div className="nova-bold f-16 w-10/12">
                            ENERGY-PACKED CARBS
                            <p className="proxima-regular f-16">Our Premium Basmati Rice is a potent source of carbohydrates, providing a quick and sustained energy boost for active lifestyles.
                            </p>
                        </div>
                        <div>
                            <div className="box-exculsive p-1">
                                <img src="/assets/home/heartbeat.png" alt="heart" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between colum-reverse-exculsive lg:my-8 md:my-8 sm:my-0 xs:my-8">
                        <div className="nova-bold f-16 w-10/12">
                            VERSATILE INGREDIENT
                            <p className="proxima-regular f-16">
                                Premium Basmati Rice can be used to make a variety of dishes, from traditional biryani and pulao to international delights like fried rice, making it a culinary staple for diverse cuisines.
                            </p>
                        </div>
                        <div>
                            <div className="box-exculsive p-2">
                                <img src="/assets/home/natural.png" alt="heart" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 exclusive-image">
                    <img src="/assets/home/banaspati-rice.png" />
                </div>
                <div className="col-span-2 col-exclusive">
                    <div className="flex justify-between">
                        <div>
                            <div className="box-exculsive p-2">
                                <img src="/assets/home/wheat-sack.png" alt="heart" />
                            </div>
                        </div>
                        <div className="nova-bold f-16 w-10/12">
                            GLUTEN-FREE OPTION
                            <p className="proxima-regular f-16">
                                Our Premium Basmati Rice offers a safe and tasty alternative for diverse diets especially for those with gluten intolerance.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between lg:my-8 md:my-8 sm:mt-0 sm:mb-8 xs:my-8">
                        <div>
                            <div className="box-exculsive p-2">
                                <img src="/assets/home/wallet-1.png" alt="heart" />
                            </div>
                        </div>
                        <div className="nova-bold f-16 w-10/12">
                            BUDGET-FRIENDLY SUSTENANCE
                            <p className="proxima-regular f-16">
                                Our Premium Basmati Rice is an economical staple that fills you up, making it a cost-effective choice for satisfying meals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <button onClick={handleButtonClick}>Hello</button>
            </div> */}
            <div>
                <TimeCount />
            </div>
        </div>
    )
}