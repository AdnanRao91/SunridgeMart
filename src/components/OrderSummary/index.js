import {orderSummary} from '../../data';
import { Divider } from '@mui/material';

export default function OrderSummary(){
    return(
        <div>
                <div className="flex items-center justify-center mt-12">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
                <h1 className="text-3xl text-center text-red-500 font-semibold mb-6">Order Summary</h1>
            {  orderSummary.map((data,index) => {
                    return(
                        <div className="grid grid-cols-1 my-4" key={data.id}>
                    <div className="f-18 josefin-sans-regular black-text">{data.name}</div>
                       <div className="flex justify-between">
                        <div className="f-16 josefin-sans-regular black-text">{data.price} X {data.quantity}</div>
                        <div className="f-16 josefin-sans-regular black-text">PKR {data.totalPrice}</div>
                       </div>
                       <div className="flex justify-between">
                        <div className="f-16 josefin-sans-regular black-text">Tax: {data.tax}%</div>
                        <div className="f-16 josefin-sans-regular black-text">{data.tax}</div>
                       </div>
                       <div className="flex justify-between">
                        <div className="f-16 josefin-sans-regular black-text">Disc({data.Discount})</div>
                        <div className="f-16 josefin-sans-regular black-text">{data.Discount}</div>
                       </div>
                       <Divider className='my-2'/>
                       <div className="flex justify-between">
                        <div className="f-16 josefin-sans-regular black-text">Total</div>
                        <div className="f-18 josefin-sans-regular black-text">{data.total}</div>
                       </div>
                       <Divider className='mt' />
                    </div>
                    
                    )
                })}
             <div className='mt-8'>
             <div className='flex justify-between'>
               <div className='f-16 josefin-sans-regular black-text'>Cart Subtotal</div>
               <div className='f-16 josefin-sans-regular black-text'>5698</div>
               </div>
               <Divider />
               <div className='flex justify-between my-1'>
               <div className='f-16 josefin-sans-regular black-text'>Total Discount</div>
               <div className='f-16 josefin-sans-regular black-text'>(0)</div>
               </div>
               <Divider />
               <div className='flex justify-between my-1'>
               <div className='f-16 josefin-sans-regular black-text'>GST</div>
               <div className='f-16 josefin-sans-regular black-text'>0</div>
               </div>
               <Divider />
               <div className='flex justify-between my-1'>
               <div className='f-16 josefin-sans-regular black-text'>Shipping and handling</div>
               <div className='f-16 josefin-sans-regular black-text'>0</div>
               </div>
               <Divider />
               <div className='flex justify-between my-1'>
               <div className='f-16 josefin-sans-regular text-color-orange'>Order Total</div>
               <div className='f-16 josefin-sans-regular text-color-orange'>PKR 5698</div>
               </div>
             </div>
            </div>
        </div >
        </div>
    )
}