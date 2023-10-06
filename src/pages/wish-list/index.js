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
                  {wishlist?.map((item, index) => (
                    <tr key={item?.id} className='lg:h-12 md:h-12 border-b border-gray-200'>
                            <td>
                        <div class='f-18 nova-bold black-text uppercase'>
                          <button class="f-14 text-white bg-orange px-[0.6rem] py-1 rounded-full">X</button>
                        </div>
                      </td>
                      <td>
                        <div className='flex justify-center'>
                        <Image src={item.imageURL} width={65} height="" alt=""/>
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
                        <div class='f-16 black-text uppercase'>
                        <button className="f-16 text-white proxima-regular bg-green px-2 py-1">Add To Cart</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  
                </tbody>
              </table>
            </div>
            
            </div>
          </div>
        </div>


    )
}

export default WishList