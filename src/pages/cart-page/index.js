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
      <div className='text-center my-8'>

        <div>
          <div className='card-product'>
            <div className='grid grid-cols-12 gap-2 '>
              <div className='col-span-9'>
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
                      Quantity
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <div className='f-18 nova-bold black-text uppercase'>
                      Sub Total
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
                  cartData?.map((data, index) => {
                    return (
                      <>
                        <div className='card-product py-3'>
                          <div className='grid grid-cols-8 items-center' key={data?.product?.id}>
                            <div className='col-span-1 flex justify-center'>
                              <div className='f-18 nova-bold black-text uppercase'>
                                <img src={data?.product?.imageURL[0]} width={65} />
                              </div>
                            </div>
                            <div className='col-span-2'>
                              <div className='f-16 black-text uppercase'>
                                {data?.product?.name}
                              </div>
                            </div>
                            <div className='col-span-1'>
                              <div className='f-186 black-text uppercase'>
                                {data?.product?.price}
                              </div>
                            </div>
                            <div style={{ margin: "0 auto" }} className='col-span-1 flex gap-2 border-2 border-orange-500 rounded-xl w-24 items-center justify-center mt-1'>
                              <button onClick={() => handleMinus(data)}><Remove /></button>
                              <h3 className="josefin-sans-regular f-16">{data?.quantity}</h3>
                              <button onClick={() => handlePlus(data)}><Add /></button>
                            </div>
                            <div className='col-span-1'>
                              <div className='f-186 black-text uppercase'>
                                {data?.totalPrice ? data?.totalPrice : data.product.price * data.quantity}
                              </div>
                            </div>
                            <div className='col-span-1'>
                              <div className='f-18 nova-bold black-text uppercase'>
                                <button onClick={() => handleRemove(data)} className="f-14 text-white bg-orange px-[0.6rem] py-1 rounded-full">X</button>
                              </div>
                            </div>
                          </div>
                          <Divider />
                        </div>
                      </>
                    )

                  })
                }
              </div>
              <div className='col-span-3'>
                <div className='total-price'>
                  <div className='f-18 nova-bold black-text uppercase text-left'>
                    Order Summary
                  </div>
                  <Divider />
                  <div className='flex justify-between my-4'>
                    <div className='f-24 nova-bold black-text proxima-regular capitalize'>
                      order total
                    </div>
                    <div className='f-18 nova-bold black-text uppercase'>
                      {subTotal}
                    </div>
                  </div>
                  <Divider />
                  <div className='flex justify-between my-4'>
                    <div className='f-24 nova-bold black-text proxima-regular capitalize'>
                      Tax
                    </div>
                    <div className='f-18 nova-bold black-text uppercase'>
                      {taxAmount}
                    </div>
                  </div>
                  <Divider />
                  <div className='flex justify-between my-4'>
                    <div className='f-24 nova-bold black-text proxima-regular capitalize'>
                      Total
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
      </div>
    </div>
  )
}

export default CartPage