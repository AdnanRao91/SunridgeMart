import React from 'react';
import { useState, useEffect } from 'react';
import { Divider } from '@mui/material';
import withAuth from '../../HOC';
import { Add, Remove } from '@mui/icons-material';


function CartPage({ children }) {

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
                <div className='card-product py-3'>
                  <div className='grid grid-cols-8 items-center'>
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
                    <div style={{ margin: "0 auto" }} className='col-span-1 flex gap-2 border-2 border-orange-500 rounded-xl w-24 items-center justify-center mt-1'>
                      <button><Remove /></button>
                      <h3 className="josefin-sans-regular f-16">2</h3>
                      <button><Add /></button>
                    </div>
                    <div className='col-span-1'>
                      <div className='f-186 black-text uppercase'>
                        1800
                      </div>
                    </div>
                    <div className='col-span-1'>
                      <div className='f-18 nova-bold black-text uppercase'>
                        <button className="f-14 text-white bg-orange px-[0.6rem] py-1 rounded-full">X</button>
                      </div>
                    </div>
                  </div>
                  <Divider />
                </div>
              </div>
              <div className='col-span-3'>
                <div className='total-price'>
                  <div className='f-18 nova-bold black-text uppercase text-left'>
                    Summary
                  </div>
                  <Divider />
                  <div className='flex justify-between my-4'>
                    <div className='f-24 nova-bold black-text proxima-regular capitalize'>
                      order total
                    </div>
                    <div className='f-18 nova-bold black-text uppercase'>
                      200.00
                    </div>
                  </div>
                  <Divider />
                  <div className='flex justify-between my-4'>
                    <div className='f-24 nova-bold black-text proxima-regular capitalize'>
                      Tax
                    </div>
                    <div className='f-18 nova-bold black-text uppercase'>
                      20.00
                    </div>
                  </div>
                  <Divider />
                  <div className='flex justify-between my-4'>
                    <div className='f-24 nova-bold black-text proxima-regular capitalize'>
                      Total
                    </div>
                    <div className='f-18 nova-bold black-text uppercase'>
                      220.00
                    </div>
                  </div>
                  <div className='btn-processed'>
                    <button className='f-18 nova-bold bg-orange-500 hover:bg-orange-600 transition text-white w-full py-2 capitalize'>processed to checkout</button>
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

export default withAuth(CartPage) 