export default function BillingDetails(){
    return(
        <div>
            <div className="flex items-center justify-center mt-12">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
                <h1 className="text-3xl text-center text-red-500 font-semibold mb-6">Billing details</h1>
                <div className="grid grid-cols-2 gap-4 my-4">
                    <div className="col-span-1">
                     <div>
                     <input
                                    type="text"
                                    name="username"
                                    placeholder="First Name"
                                   
                                    className="w-full mb-2 p-2 rounded-lg border border-gray-300 outline-none"
                                />
                     </div>
                    </div>
                    <div className="col-span-1">
                     <div>
                     <input
                                    type="text"
                                    name="username"
                                    placeholder="Last Name"
                                   
                                    className="w-full mb-2 p-2 rounded-lg border border-gray-300 outline-none"
                                />
                     </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                     <div>
                     <input
                                    type="emial"
                                    name="email"
                                    placeholder="Email"
                                   
                                    className="w-full mb-2 p-2 rounded-lg border border-gray-300 outline-none"
                                />
                     </div>
                    </div>
                    <div className="col-span-1">
                     <div>
                     <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                   
                                    className="w-full mb-2 p-2 rounded-lg border border-gray-300 outline-none"
                                />
                     </div>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="col-span-1 my-4">
                     <input
                                    type="text"
                                    name="country"
                                    placeholder="Country"
                                   
                                    className="w-full mb-2 p-2 rounded-lg border border-gray-300 outline-none"
                                />
                    </div>
                    <div className="col-span-1">
                     <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                   
                                    className="w-full mb-2 p-2 rounded-lg border border-gray-300 outline-none"
                                />
                    </div>
                    <div className="col-span-1">
                     <textarea
                                    type="text"
                                    name="address"
                                    placeholder="address"
                                   
                                    className="w-full mb-2 p-2 h-24 rounded-lg border border-gray-300 outline-none"
                                />
                    </div>
                    <div className="col-span-1">
                     <textarea
                                    type="text"
                                    name="orderDiscription"
                                    placeholder="Order Discription"
                                   
                                    className="w-full mb-2 p-2 h-28s rounded-lg border border-gray-300 outline-none"
                                />
                    </div>
                </div>
            </div>
        </div >
        </div>
    )
}