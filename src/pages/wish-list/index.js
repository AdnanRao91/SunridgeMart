import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router';
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
        <div className='top-spacing mx-7'>
            <div className='f-24 josefin-sans-bold black-text flex justify-center'>
                My Wishlist
            </div>
            <div className='card-product'>
                <div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 gap-2'>
                    <div className='col-span-12'>
                        <table className='table-auto w-full text-center'>
                            <thead>
                                <tr className='lg:h-12 md:h-12 border-b border-gray-200'>
                                    <th className='f-18 nova-bold black-text uppercase'>Remove</th>
                                    <th className='f-18 nova-bold black-text uppercase'>Image</th>
                                    <th className='f-18 nova-bold black-text uppercase'>Product Name</th>
                                    <th className='f-18 nova-bold black-text uppercase'>Price</th>
                                    <th className='f-18 nova-bold black-text uppercase'>Stock Status</th>
                                    <th className='f-18 nova-bold black-text uppercase'>Add To Cart</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlistData?.map((item, index) => {
                                    const isDisabled = cartData?.some((val) => val.product.id == item.id)
                                    return (
                                        <tr key={item?.id} className='lg:h-12 md:h-12 border-b border-gray-200'>
                                            <td>
                                                <div className='f-18 nova-bold black-text uppercase'>
                                                    <button onClick={() => handleRemove(item)} class="f-14 text-white bg-orange px-[0.6rem] py-1 rounded-full">X</button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex justify-center'>
                                                    <Image src={item.imageURL} width={65} height="" alt="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='f-16 nova-bold black-text uppercase table-heading-responsive'>Product Name:</div>
                                                <div className='f-16 black-text uppercase'>
                                                    {item.name}
                                                </div>
                                            </td>
                                            <td>
                                                <div className='f-16 nova-bold black-text uppercase table-heading-responsive me:4'>Price:</div>
                                                {item.price}
                                            </td>
                                            <td>
                                                <div className='f-16 nova-bold black-text uppercase table-heading-responsive me:4'>Stock Status:</div>
                                                {item.quantity > 0 ? "In Stock" : "Out of stock"}
                                            </td>
                                            <td>
                                                <div className='f-16 black-text uppercase'>
                                                    <button disabled={isDisabled} onClick={(e) => handleAddtoCart(e, item)} className={`${isDisabled ? "text-white bg-green" : "border-gray-400 text-black"} f-16  proxima-regular border  rounded-e-sm px-2 py-1`}>Add To Cart</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default WishList