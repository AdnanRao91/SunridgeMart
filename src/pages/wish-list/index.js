import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import { Divider } from "@mui/material";
import { deleteRequest, get, post } from '../../api-services/index'
import { SnackbarUtility, TokenStorage } from '../../utils/index';
import Image from "next/image";
import { endPoints } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { handleGetWishlist } from "../../store/slices/Wishlist";
import { handleGetCart } from "../../store/slices/Cart";
function WishList({ user }) {
    const dispatch = useDispatch()
    const router = useRouter();
    const wishlistData = useSelector((state) => state?.Wishlist?.wishlistItems);
    const cartData = useSelector((state) => state?.Cart?.cartItems);
    
    const handleStorage = new TokenStorage;
    const showSnackbar = new SnackbarUtility;

    useEffect(() => {
        dispatch(handleGetWishlist(handleStorage.getGuid()))
    }, [])

    const handleRemove = async (data) => {
        try {
            let payload = {
                id: 0,
                customerId: handleStorage.getGuid(),
                productId: data.id,
            }
            let response = await deleteRequest(`${endPoints.deleteWishlist}?customerId=${handleStorage.getGuid()}`, payload)
            dispatch(handleGetWishlist(handleStorage.getGuid()))
        } catch (error) {
            console.log(error, "errorerror")
        }
    };

    const handleAddtoCart = (e, data) => {
        e.stopPropagation();
        let payload = {
            customerId: handleStorage.getGuid(),
            productId: data.id,
            quantity: 1
        }
        post(`${endPoints.addToCart}?customerId=${handleStorage.getGuid()}`, payload).then((response) => {
            if (response.code == 200) {
                showSnackbar.successMessage(response.message)
                dispatch(handleGetCart(handleStorage.getGuid()))
            } else {
                showSnackbar.errorMessage(response.message)
            }
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
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
                    </div>
                </div>
                {
                    wishlistData?.map((item, index) => {
                        const isDisabled = cartData?.some((val) => val?.product?.id == item?.id)
                        return (
                            <>
                                <div key={item?.id} className='card-product py-3'>
                                    <div className='grid grid-cols-1 md:grid-cols-7 items-center'>
                                        <div className='col-span-1 md:col-span-1 flex justify-center'>
                                            <div className='text-xl md:text-2xl font-bold uppercase'>
                                                <Image src={item.imageURL} width={65} height="" alt="" />
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
                                            <button disabled={isDisabled} onClick={(e) => handleAddtoCart(e, item)} className={`${isDisabled ? "text-white bg-green" : "border-gray-400 text-black"} f-16  proxima-regular border  rounded-e-sm px-2 py-1`}>Add To Cart</button>
                                        </div>
                                        <div className='col-span-1 md:col-span-1'>
                                            <div className='f-18 nova-bold black-text uppercase'>
                                                <button onClick={() => handleRemove(item)} className="text-white bg-orange px-[0.6rem] py-1 rounded-full">X</button>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />
                                </div>
                            </>
                        );
                    })}
            </div>
        </div>

    )
}

export default WishList