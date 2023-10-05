import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import { Divider } from "@mui/material";
import { get } from '../../api-services/index'
import { TokenStorage } from '../../utils/index';
import Image from "next/image";
function WishList({ user }) {
    const router = useRouter();
    const [wishlist, setWishlist] = useState()
    const handleStorage = new TokenStorage;
    useEffect(() => {
        handleGetWishlistItem()
    },[])
    const handleGetWishlistItem = () => {
        const apiUrl = 'WishList/get-wishlistItems-by-customerId/'
        get(apiUrl + handleStorage.getGuid()).then((response) => {
         setWishlist(response?.data?.product)
        })
    }
    return (
<div className='top-spacing mx-4 md:mx-7'>
    <div className='f-30 josefin-sans-bold black-text flex justify-center'>
        My Wishlist
    </div>
    <div className='text-center my-8'>

        <div>
            <div className='card-product'>
                <div className='lg:grid md:grid hidden grid-cols-7'>
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
                
                {/* ... */}
            </div>
        </div>
        {
        wishlist?.map((item, index) => {
            return (
              <>
                <div key={item?.id} className='card-product py-3'>
                    <div className='grid grid-cols-1 md:grid-cols-7 items-center'>
                        <div className='col-span-1 md:col-span-1 flex justify-center'>
                            <div className='text-xl md:text-2xl font-bold uppercase'>
                                <Image src={item.imageURL} width={65} height="" alt=""/>
                            </div>
                        </div>
                        <div className='col-span-2 md:col-span-2'>
                            <div className='f-16 black-text uppercase'>
                                {item.name}
                            </div>
                        </div>
                        <div className='col-span-1 md:col-span-1'>
                            <div className='f-16 black-text uppercase'>
                                {item.price}
                            </div>
                        </div>
                        <div className='col-span-1 md:col-span-1'>
                            <div className='f-16 black-text uppercase'>
                                {item.quantity > 0 ? "In Stock" : "Out of stock"}
                            </div>
                        </div>
                        <div className='col-span-1 md:col-span-1'>
                            <button className="f-16 text-white proxima-regular bg-green px-2 py-1">Add To Cart</button>
                        </div>
                        <div className='col-span-1 md:col-span-1'>
                            <div className='f-18 nova-bold black-text uppercase'>
                                <button className="text-white bg-orange px-[0.6rem] py-1 rounded-full">X</button>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    {/* ... */}
                </div>
              </>
            );
        })}
    </div>
</div>

    )
}

export default WishList