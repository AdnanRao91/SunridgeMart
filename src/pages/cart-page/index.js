import React from 'react';
import { useState, useEffect } from 'react';
import { Divider } from '@mui/material';
import withAuth from '../../HOC';
import { Add, Remove } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { get } from '../../api-services/index'
import { TokenStorage } from '../../utils/index'

function CartPage({ children }) {
  const handlestorage = new TokenStorage
  const [cart, setCart] = useState()
  const [totalPrices, setTotalPrices] = useState(0)
  const [tax, setTax] = useState(null)
  const [taxAmount, setTaxAmount] = useState([])
  const [totalPriceWithTax, setTotalPriceWithTax] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    handleCart();

  }, [])

  const handleCart = () => {
    const apiURl = 'CartItem/get-cartitems-by-customerId/'
    get(apiURl + handlestorage.getGuid()).then((response) => {
      setCart(response?.data?.productWithQuantity)
      calculateOrderTotal(response?.data?.productWithQuantity)
      handleTax(response?.data?.productWithQuantity);
    })
  }


  const handleTax = (productData) => {
    const apiURl = 'Tax/get-all';
    get(apiURl)
      .then((response) => {
        setTax(response?.data);
        calculateTax(response?.data, productData)
      })
      .catch((error) => {
        console.error('Error fetching tax data:', error);
      });
  }
  const calculateOrderTotal = (data) => {
    const totalPricesTemp = data?.reduce((total, product) => {
      const subTotal = product.product.price * product.quantity;
      const totalPrice = total + subTotal;
      return totalPrice;
    }, 0);
    setTotalPrices(totalPricesTemp)
    return totalPricesTemp
  }

  const calculateTax = (taxData, productData) => {
    if (taxData && productData !== null) {
      const taxRate = taxData[0].taxPercent;
      const subTotal = calculateOrderTotal(productData)
      const taxAmount = (subTotal * taxRate) / 100;
      setTaxAmount(taxAmount)
      const totalPriceWithTax = subTotal + taxAmount;
      setTotalPriceWithTax(totalPriceWithTax)
    } else {
      console.log('Tax data or total price is not available yet.');
    }
  }

  const handleMinus = (data) => {
    if (data.quantity > 1) {
      let temp = [...cart]
      temp.forEach((item, index) => {
        if (item.product.id == data.product.id) {
          temp[index].quantity -= 1
          temp[index].totalPrice = temp[index].quantity * temp[index]?.product?.price;
          setTotalPrice(temp[index].totalPrice)
        }
      })
      setCart(temp)
      calculateOrderTotal(temp)
      handleTax(temp);
    } else {
      alert("Quantity cannot go below 1")
    }
  };
  const handlePlus = (data) => {
    if (data.quantity < 10) {
      let temp = [...cart];
      temp.forEach((item, index) => {
        if (item.product.id === data.product.id) {
          temp[index].quantity += 1;
          temp[index].totalPrice = temp[index].quantity * temp[index]?.product?.price;
          setTotalPrice(temp[index].totalPrice)
        }
      });
      setCart(temp);
      calculateOrderTotal(temp)
      handleTax(temp);
    } else {
      alert("you have already select 10 items");
    }
  };

  const router = useRouter();
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
                {cart?.map((data, index) => (
                  <tr key={data?.product?.id} className='lg:h-12 md:h-12 border-b border-gray-200'>
                          <td>
                      <div class='f-18 nova-bold black-text uppercase'>
                        <button class="f-14 text-white bg-orange px-[0.6rem] py-1 rounded-full">X</button>
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
          <div className='col-span-3'>
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
                      {totalPrices}
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
            {/* <div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 gap-2'>
              <div className='col-span-9'>
                <div className='grid grid-cols-8 cart_product_heading'>
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
                  cart?.map((data, index) => {
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
                                <button className="f-14 text-white bg-orange px-[0.6rem] py-1 rounded-full">X</button>
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
                      {totalPrices}
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
            </div> */}
          </div>
        </div>
      </div>
  )
}

export default withAuth(CartPage) 