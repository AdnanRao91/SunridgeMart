import React from 'react';
import { useState, useEffect } from 'react';
import { Divider } from '@mui/material';
import withAuth from '../../HOC';
import { Add, Remove } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { deleteRequest, get, patch } from '../../api-services/index'
import { SnackbarUtility, TokenStorage } from '../../utils/index'
import { endPoints } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetCart } from "../../store/slices/Cart"

function CartPage({ children }) {
  const dispatch = useDispatch()
  const router = useRouter();
  const handlestorage = new TokenStorage
  const showSnackbar = new SnackbarUtility
  const cartData = useSelector((state) => state?.Cart?.cartItems);
  const subTotal = useSelector((state) => state?.Cart?.subTotal);
  const taxAmount = useSelector((state) => state?.Cart?.taxAmount);
  const totalPriceWithTax = useSelector((state) => state?.Cart?.totalPrice);


  useEffect(() => {
    dispatch(handleGetCart(handlestorage.getGuid()))
  }, [cartData?.length])

  const handleMinus = async (data) => {
    if (data.quantity > 1) {
      try {
        let payload = {
          id: 0,
          customerId: handlestorage.getGuid(),
          productId: data.product.id,
          quantity: data.quantity - 1
        }
        let response = await patch(`${endPoints.updateCart}?customerId=${handlestorage.getGuid()}`, payload)
        dispatch(handleGetCart(handlestorage.getGuid()))
      } catch (error) {
        console.log(error, "errorerror")
      }
    } else {
      showSnackbar.errorMessage('Quantity cannot go below 1')
    }
  };

  const handlePlus = async (data) => {
    if (data.quantity < 10) {
      try {
        let payload = {
          id: 0,
          customerId: handlestorage.getGuid(),
          productId: data.product.id,
          quantity: data.quantity + 1
        }
        let response = await patch(`${endPoints.updateCart}?customerId=${handlestorage.getGuid()}`, payload)
        dispatch(handleGetCart(handlestorage.getGuid()))
      } catch (error) {
        console.log(error, "errorerror")
      }
    } else {
      showSnackbar.errorMessage('you have already select 10 items')
    }
  };

  const handleRemove = async (data) => {
    try {
      let payload = {
        id: 0,
        customerId: handlestorage.getGuid(),
        productId: data.product.id,
        quantity: 0
      }
      let response = await deleteRequest(`${endPoints.deleteCart}?customerId=${handlestorage.getGuid()}`, payload)
      dispatch(handleGetCart(handlestorage.getGuid()))
    } catch (error) {
      console.log(error, "errorerror")
    }
  };

  const handleCheckOut = () => {
    router.push('/check-out')
  }

  return (
    <div className='top-spacing mx-7'>
      <div className='f-24 josefin-sans-bold black-text flex justify-center'>
        Shopping Cart
      </div>
      <div className='card-product'>
        <div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 gap-2'>
          <div className='col-span-9'>
            <table className='table-auto w-full text-center'>
              <thead>
                <tr className='lg:h-12 md:h-12 border-b border-gray-200'>
                  <th className='f-18 nova-bold black-text uppercase'>Remove</th>
                  <th className='f-18 nova-bold black-text uppercase'>Image</th>
                  <th className='f-18 nova-bold black-text uppercase'>Product Name</th>
                  <th className='f-18 nova-bold black-text uppercase'>Price</th>
                  <th className='f-18 nova-bold black-text uppercase'>Quantity</th>
                  <th className='f-18 nova-bold black-text uppercase'>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {cartData?.map((data, index) => (
                  <tr key={data?.product?.id} className='lg:h-12 md:h-12 border-b border-gray-200'>
                    <td>
                      <div class='f-18 nova-bold black-text uppercase wishlistRemove'>
                        <button onClick={() => handleRemove(data)} class="remove-product text-white bg-orange lg:px-[0.6rem] md:px-[0.6rem] sm:px-[0.6rem] xs:px-[0.5rem] lg:py-1 md:py-1 sm:py-1 xs:pt-[0.3rem] xs:pb-[0.2rem] rounded-full">X</button>
                      </div>
                    </td>
                    <td>
                      <div className='flex justify-center'>
                        <img src={data?.product?.imageURL[0]} width={65} />
                      </div>
                    </td>
                    <td>
                      <div className='f-16 nova-bold black-text uppercase table-heading-responsive'>Product Name:</div>
                      <div className='f-16 black-text uppercase'>
                        {data?.product?.name}
                      </div>
                    </td>
                    <td>
                      <div className='f-16 nova-bold black-text uppercase table-heading-responsive me:4'>Price:</div>
                      <div>{data?.product?.price}</div>
                    </td>
                    <td>
                      <div className='f-16 nova-bold black-text uppercase table-heading-responsive me:4'>Quantity:</div>
                      <div style={{ margin: "0 auto" }} className='lg:col-span-1 md:col-span-1 flex gap-2 border-2 border-orange-500 rounded-xl w-24 items-center justify-center mt-1'>
                        <button onClick={() => handleMinus(data)}><Remove /></button>
                        <h3 className="josefin-sans-regular f-16">{data?.quantity}</h3>
                        <button onClick={() => handlePlus(data)}><Add /></button>
                      </div>
                    </td>
                    <td>
                      <div className='f-16 nova-bold black-text uppercase table-heading-responsive me:4'>Sub Total:</div>
                      <div class='f-16 black-text uppercase'>
                        {data?.totalPrice ? data?.totalPrice : data.product.price * data.quantity}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='lg:col-span-3 md:col-span-3 sm:col-span-3 xs:col-span-12'>
            <div className='total-price'>
              <div className='f-18 nova-bold black-text uppercase text-left h-12 flex align-center'>
                Order Summary
              </div>
              <Divider />
              <div className='flex justify-between h-12'>
                <div className='f-18 nova-bold black-text proxima-regular capitalize'>
                  order total:
                </div>
                <div className='f-18 nova-bold black-text uppercase'>
                  {subTotal}
                </div>
              </div>
              <Divider />
              <div className='flex justify-between h-12'>
                <div className='f-18 nova-bold black-text proxima-regular capitalize'>
                  Tax:
                </div>
                <div className='f-18 nova-bold black-text uppercase'>
                  {taxAmount}
                </div>
              </div>
              <Divider />
              <div className='flex justify-between h-12'>
                <div className='f-18 nova-bold black-text proxima-regular capitalize'>
                  Total:
                </div>
                <div className='f-18 nova-bold black-text uppercase'>
                  {totalPriceWithTax}
                </div>
              </div>
              <div className='btn-processed'>
                <button className='f-18 nova-bold bg-orange-500 hover:bg-orange-600 transition text-white w-full py-2 capitalize' onClick={handleCheckOut}>processed to checkout</button>
              </div>
              <div className='btn-processed my-4'>
                <button className='f-18 nova-bold bg-green-600 hover:bg-green-700 text-white w-full py-2 capitalize'>continue to shopping</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage