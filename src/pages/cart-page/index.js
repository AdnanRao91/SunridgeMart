import React from 'react';
import { useState, useEffect } from 'react';
import { Divider } from '@mui/material';
export default function CartPage({ children }){
 const {productCart, setProductCart} = useState 
  // GetCartItme = () =>{
    
  // }
    return(
        <div className='top-spacing mx-7'>
        <div className='f-24 josefin-sans-bold black-text flex justify-center'>
          Shopping Cart
        </div>
        <div className='text-center my-8'>
  
            <div>
              <div className='card-product'>
                <div className='grid grid-cols-8'>
              <div className='col-span-6'>
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
              </div>
              <div className='col-span-2'>
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
                    0.0000
                  </div>
                  </div>
                  <Divider />
                  <div className='flex justify-between my-4'>
                  <div className='f-24 nova-bold black-text proxima-regular capitalize'>
                    Tax
                  </div>
                  <div className='f-18 nova-bold black-text uppercase'>
                    0.0000
                  </div>
                  </div>
                  <Divider />
                  <div className='flex justify-between my-4'>
                  <div className='f-24 nova-bold black-text proxima-regular capitalize'>
                    Total
                  </div>
                  <div className='f-18 nova-bold black-text uppercase'>
                    0.0000
                  </div>
                  </div>
                  <div className='btn-processed'>
                    <button className='f-24 nova-bold bg-orange text-white w-full py-2 capitalize'>processed to checkout</button>
                  </div>
                  <div className='btn-processed my-4'>
                    <button className='f-24 nova-bold bg-green text-white w-full py-2 capitalize'>continue to shopping</button>
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