import React from "react"
import Image from "next/image"
import TimeCount from "../TimeCount"
export default function Exculsive() {
    return (
        <div className="exculsive-img-background px-20">
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
            <div className="lg:flex lg:grid lg:grid-cols-6 md:grid-cols-1  gap-2">
                <div className="col-span-2">
                    <div className="flex justify-between">
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
                    <div className="flex justify-between my-8">
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
                <div className="col-span-2">
                    <img src="/assets/home/banaspati-rice.png" />
                </div>
                <div className="col-span-2">
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
                    <div className="flex justify-between my-8">
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
            <div>
                <TimeCount />
            </div>
        </div>
    )
}