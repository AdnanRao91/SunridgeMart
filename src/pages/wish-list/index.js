import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import { Divider } from "@mui/material";
import withAuth from "../../HOC"
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
                        <div className='grid grid-cols-8'>
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
                        <div className='card-product py-3'>
                            <div className='grid grid-cols-8 flex items-center'>
                                <div className='col-span-1 flex justify-center'>
                                    <div className='f-18 nova-bold black-text uppercase'>
                                        <img src="/assets/home/Atta-Fortified.png" width={65} />
                                    </div>
                                </div>
                                <div className='col-span-2'>
                                    <div className='f-16 black-text uppercase'>
                                        Fotified Atta
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='f-186 black-text uppercase'>
                                        450
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='f-16 black-text uppercase'>
                                        In Stock
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='f-18 nova-bold black-text uppercase'>
                                        <button className="f-18 text-white nova-bold bg-green px-3 py-2 rounded-full">Add To Cart</button>
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='f-18 nova-bold black-text uppercase'>
                                        <button className="f-18 text-white nova-bold bg-orange px-4 py-2 rounded-full">X</button>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                        </div>
                        <div className='card-product py-3'>
                            <div className='grid grid-cols-8 flex items-center'>
                                <div className='col-span-1 flex justify-center'>
                                    <div className='f-18 nova-bold black-text uppercase'>
                                        <img src="/assets/home/blue-rice.png" width={65} />
                                    </div>
                                </div>
                                <div className='col-span-2'>
                                    <div className='f-16 black-text uppercase'>
                                        Rice
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='f-186 black-text uppercase'>
                                        550
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='f-16 black-text uppercase'>
                                        In Stock
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='f-18 nova-bold black-text uppercase'>
                                        <button className="f-18 text-white nova-bold bg-green px-3 py-2 rounded-full">Add To Cart</button>
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='f-18 nova-bold black-text uppercase'>
                                        <button className="f-18 text-white nova-bold bg-orange px-4 py-2 rounded-full">X</button>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                        </div>
                        <div className='card-product py-3'>
                            <div className='grid grid-cols-8 flex items-center'>
                                <div className='col-span-1 flex justify-center'>
                                    <div className='f-18 nova-bold black-text uppercase'>
                                        <img src="/assets/home/maida.png" width={65} />
                                    </div>
                                </div>
                                <div className='col-span-2'>
                                    <div className='f-16 black-text uppercase'>
                                        Maida
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='f-186 black-text uppercase'>
                                        150
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='f-16 black-text uppercase'>
                                        In Stock
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='f-18 nova-bold black-text uppercase'>
                                        <button className="f-18 text-white nova-bold bg-green px-3 py-2 rounded-full">Add To Cart</button>
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='f-18 nova-bold black-text uppercase'>
                                        <button className="f-18 text-white nova-bold bg-orange px-4 py-2 rounded-full">X</button>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(WishList)