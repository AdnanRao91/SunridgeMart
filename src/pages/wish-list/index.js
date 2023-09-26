import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import { Divider } from "@mui/material";
import withAuth from "../../HOC"
import { cartData } from "../../data";
function WishList({ user }) {
    const router = useRouter();
    return (
        <div className='top-spacing mx-7'>
            <div className='f-30 josefin-sans-bold black-text flex justify-center'>
                My Wishlist
            </div>
            <div className='text-center my-8'>

                <div>
                    <div className='card-product'>
                        <div className='grid grid-cols-7'>
                            <div className='col-span-1'>
                                <div className='f-18 nova-bold black-text uppercase'>
                                    Image
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <div className='f-18 nova-bold black-text uppercase'>
                                    Product Name
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='f-18 nova-bold black-text uppercase'>
                                    Price
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='f-18 nova-bold black-text uppercase'>
                                    Stock Status
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='f-18 nova-bold black-text uppercase'>
                                    Add To Cart
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='f-18 nova-bold black-text uppercase'>
                                    Remove
                                </div>
                            </div>
                        </div>
                        <Divider />
                        {
                            cartData.map((item, index) => {
                                return (
                                    <div key={item.id} className='card-product py-3'>
                                        <div className='grid grid-cols-7 items-center'>
                                            <div className='col-span-1 flex justify-center'>
                                                <div className='f-18 nova-bold black-text uppercase'>
                                                    <img src={item.image} width={65} />
                                                </div>
                                            </div>
                                            <div className='col-span-2'>
                                                <div className='f-16 black-text uppercase'>
                                                    {item.name}
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='f-186 black-text uppercase'>
                                                    {item.price}
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='f-16 black-text uppercase'>
                                                    {item.status == 0 ? "In Stock" : "Out of stock"}
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <button className="f-16 text-white proxima-regular bg-green px-2 py-1">Add To Cart</button>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='f-18 nova-bold black-text uppercase'>
                                                    <button className="f-14 text-white bg-orange px-[0.6rem] py-1 rounded-full">X</button>
                                                </div>
                                            </div>
                                        </div>
                                        <Divider />
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(WishList)