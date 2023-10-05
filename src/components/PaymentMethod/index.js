import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Divider } from "@mui/material";
const PaymentMethod = () => {
    return (
        <div>
            <div className="text-3xl text-center text-red-500 font-semibold mt-12 uppercase">Payment Method</div>
            <div className="f-16 text-center text-red-500 font-semibold uppercase">Please Select One</div>
            <div className="flex items-center justify-center gap-4 mt-6 br-light-grey py-4 rounded-lg mb-8">
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="COD" control={<Radio />} label="Cash on Delivery" />
                    <FormControlLabel value="JazzCash" control={<Radio />} label="Jazz Cash" className="mx-4" />
                    <FormControlLabel value="EasyPaisa" control={<Radio />} label="Easy Paisa" className="mx-4" />
                    <FormControlLabel
                        value="HBL"
                        control={<Radio />}
                        label="HBL"
                        className="mx-4"
                    />
                </RadioGroup>
            </div >
            <Divider />
            <div className="mt-8">
                <div className="text-3xl text-center text-red-500 font-semibold uppercase">Promo code</div>
                <div className="f-16 text-center text-red-500 font-semibold uppercase">Enter Below</div>
                <div className="flex justify-center my-6">
                    <input
                        type="text"
                        name="promocode"
                        placeholder="Enter prome Code"

                        className="w-1/2 p-2 rounded-lg border border-gray-300 outline-none"
                    />
                    <button className="uppercase f-16 proxima-regular text-white bg-black px-6 rounded-lg mx-2">
                        apply promo code
                    </button>
                </div>

            </div>
        </div>
    )
}
export default PaymentMethod