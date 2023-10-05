import { Add, Remove } from "@mui/icons-material"
import Image from "next/image"
import { useState, useEffect } from "react"
import ImageMagnifier from "../../components/ImageMagnifier"
import { productDetailData } from "../../data"
import { Avatar, Divider, Rating } from "@mui/material"
import { get, post } from "@/api-services/index"
import { useRouter } from 'next/router';
import { endPoints } from "../../constants"
import { TokenStorage } from '../../utils/index';
import { SnackbarUtility } from '../../utils/index';

const ProductDetail = () => {
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [count, setCount] = useState(1);
    const [selectedImage, setSelectedImage] = useState(productDetailData.images[0].url)
    const [productDetails, setProductDetails] = useState(null)
    const [cart, setCart] = useState([])
    const router = useRouter();
    const { id } = router.query;
    const { query } = useRouter()
    const snackBar = new SnackbarUtility
    const handlestorage = new TokenStorage

    useEffect(() => {
        getProductDetail()
        getCart()
    }, [router]);


    const handleSelectImage = (val) => {
        setSelectedImage(val)
    }
    const calculateDiscountedPrice = (data) => {
        const discountAmount = (data?.price * data?.discount) / 100;
        const calculatedDiscountedPrice = data?.price - discountAmount;
        setDiscountedPrice(calculatedDiscountedPrice);
    };

    const calculateDiscountedPriceQty = (data, count) => {
        const discountAmount = (data?.price * data?.discount) / 100;
        const calculatedDiscountedPrice = count * (data?.price - discountAmount);
        return calculatedDiscountedPrice;
    };
    const getCart = () => {
        const apiURl = 'CartItem/get-cartitems-by-customerId/'
        get(apiURl + handlestorage.getGuid()).then((response) => {
          setCart(response?.data?.productWithQuantity)
        })
      }
    const handleAddtoCart = (e, data) => {
        e.stopPropagation();
        let payload = {
          customerId: handlestorage.getGuid(),
          productId: data.id,
          quantity: count,
        }
        console.log(payload, "payloadpayload")
        const apiUrl = 'CartItem/AddToCart';
        post(`${apiUrl}?customerId=${handlestorage.getGuid()}`, payload).then((response) => {
          if (response.code === 200) {
            snackBar.successMessage(response.message)
          }
        })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }


    const getProductDetail = async () => {
        try {
            const url = `${endPoints.getProductDetail}/${id}`;
            let response = await get(url)
            setProductDetails(response.data)
            calculateDiscountedPrice(response.data)
        } catch (error) {
            console.log(error, "errorerrorerror")
        }
    }
    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
            const newDiscountedPrice = calculateDiscountedPriceQty(productDetails, count - 1);
            setDiscountedPrice(newDiscountedPrice);
        }
    };
    const incrementCount = () => {
        if (count < 10) {
            setCount(count + 1);
            const newDiscountedPrice = calculateDiscountedPriceQty(productDetails, count + 1);
            setDiscountedPrice(newDiscountedPrice);
        }
    };
    // Sample reviews data
    const reviews = [
        {
            id: 1,
            author: 'John Doe',
            comment: 'Great product, I love it!',
            rating: 3,
            date: "9/12/2023"
        },
        {
            id: 3,
            author: 'Jane Smith',
            comment: 'Not as expected, but still good.',
            rating: 4,
            date: "9/12/2023"
        },
    ];

    const isDisabled = cart?.some((item) => item.product?.id === productDetails?.id)
    
    return (
        <div className="container mx-auto top-spacing">
            <div className="grid grid-cols-12 justify-center mx-10 p-3 mt-3">
                <div className="col-span-4 flex justify-center">
                    <div
                        className="overflow-y-scroll h-60 p-2 no-scrollbar">
                        {
                            productDetails?.imageURL?.map((item, index) => {
                                return (
                                    <Image
                                        onClick={() => handleSelectImage(item)}
                                        key={index} style={{
                                            border: "1px solid #ccc",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                            marginTop: index == 0 ? "0px" : "5px"
                                        }} src={`http://172.16.20.233/SunridgeEMart/${item}`} width={50} height={50} />
                                )
                            })
                        }
                    </div>
                    <ImageMagnifier width={"200px"} src={selectedImage} />
                </div>
                <div className="col-span-5">

                    <h1 className="f-24 nova-bold text-light-black mt-1">{productDetails?.name}</h1>
                    <h1 className="f-18 proxima-regular text-light-black">{productDetails?.category}</h1>
                    <h2 className="f-14 text-light-black ">{productDetails?.description}</h2>
                    <div className='flex gap-2 items-center mt-1'>
                        <Image src="/assets/home/star.png" width={20} height={18} />
                        <h3 className='josefin-sans-regular f-16'>{productDetailData.rating}</h3>
                        <Divider className="h-5 border-gray-300 border" />
                        <h3 className='josefin-sans-regular f-16'>Reviews <span className="bg-orange-400 text-white text-sm mr-2 px-2.5 py-0.5 rounded ">200</span> </h3>
                    </div>
                    {/* <h2 className="nova-bold f-24 f-16 text-color-orange mt-1">PKR {productDetails.price}</h2> */}
                    <div className='flex gap-4 mt-2'>
                        {productDetailData?.discount ? (
                            <h3 className='text-color-orange josefin-sans-bold f-16'>PKR {discountedPrice}</h3>
                        ) : (
                            <h3 className='text-color-orange josefin-sans-bold f-16'>PKR {productDetails?.price}</h3>
                        )}
                        {productDetailData?.discount ? (
                            <h3 className='text-light-black josefin-sans-regular f-16 line-through'></h3>
                        ) : (
                            <h3 className='text-color-orange josefin-sans-bold f-16'>PKR{productDetails?.price}</h3>
                        )}
                        {/* <h3 className='text-light-black josefin-sans-regular f-18 line-through'>{originalPrice} </h3> */}
                    </div>
                    <div className="flex gap-2 border-2 border-orange-500 rounded-xl w-24 items-center justify-center mt-1">
                        <button onClick={() => decrementCount(count - 1, productDetails?.price)}><Remove /></button>
                        <h3 className="josefin-sans-regular f-16">{count}</h3>
                        <button onClick={() => incrementCount(count + 1, productDetails?.price)}><Add /></button>
                        {

                        }
                    </div>
                    <button disabled={isDisabled} onClick={(e) => handleAddtoCart(e, productDetails)} className="bg-orange-500 nova-regular text-white p-2 rounded-md mt-3 uppercase">Add to cart</button>
                </div>
            </div>
            <div className="border-b-gray-400 border-b py-8">
                <div className="flex justify-center">
                    <button className="bg-orange-500 hover:bg-orange-600 transition nova-regular text-white px-4 py-2 rounded-sm mt-3">Reviews</button>
                </div>
            </div>
            <div className="p-4">
                {reviews.map((review, index) => (
                    <div key={review.id} className="mb-4 pb-2 border-gray-300 border-b">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-2 items-center ">
                                <Avatar />
                                <div>
                                    <p className="f-16 text-light-black proxima-regular ml-1">{review.author}</p>
                                    <Rating name="half-rating-read" defaultValue={review.rating} precision={0.5} readOnly size="small" />
                                </div>
                            </div>
                            <h3 className="f-16 text-light-black proxima-regular">{review.date}</h3>
                        </div>
                        <p className="f-16 proxima-regular text-light-black">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductDetail