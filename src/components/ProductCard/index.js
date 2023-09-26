import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { useState, useEffect } from 'react'
import { post } from '../../api-services/index'
import { SnackbarUtility } from '@/utils'

const ProductCard = ({ data, handleAddtoCart }) => {
    const [originalPrice, setOriginalPrice] = useState([]);
    const [discountPercentage, setDiscountPercentage] = useState([]);
    const [discountedPrice, setDiscountedPrice] = useState([]);
    const router = useRouter()
    const { enqueueSnackbar } = useSnackbar();
    const snackbar = new SnackbarUtility();
    const calculateDiscountedPrice = () => {
        setDiscountPercentage(data?.discount);
        setOriginalPrice(data?.price);
        const discountAmount = (originalPrice * discountPercentage) / 100;
        const calculatedDiscountedPrice = originalPrice - discountAmount;
        setDiscountedPrice(calculatedDiscountedPrice.toFixed(2));
    };
    useEffect(() => {
        calculateDiscountedPrice();
    }, [originalPrice, discountPercentage]);
    useEffect(() => {
        // Whenever new data is received, update the state variables.
        setDiscountPercentage(data?.discount || 0);
        setOriginalPrice(data?.price || 0);
    }, [data]);
    const handleAddtoWishlist = (e) => {
        e.stopPropagation();
        // enqueueSnackbar('Product added to wishlist successfully', {
        //     variant: 'success',
        //     anchorOrigin: {
        //         vertical: 'top',
        //         horizontal: 'center',
        //     },
        //     autoHideDuration: 2000
        // });
    }

    // const getCartById = () => {
    //   const getUrl = 'CartItem/get-by-id/'
    //   get(getUrl).then((response) => {
    //     console.log(response)
    //   })
    // }
    return (
        <div className="product-card-container height-product-card relative" onClick={() => router.push(`/product-detail/${data.id}`)}>
            <div className="product-image" style={{}}>
                <Image src={data?.imageURL} width={65} height={146} style={{ margin: "0 auto" }} alt='product image' />
                {
                    discountPercentage ? (
                        <div className='discount-container'>
                            <h2 className='f-16 proxima-regular text-white'>{discountPercentage}%</h2>
                        </div>

                    ) :
                        (
                            ''
                        )
                }
            </div>
            <div className='content-container'>
                <h3 className='f-14 proxima-regular text-light-black'>{data?.category}</h3>
                <h3 className='f-18 nova-bold text-light-black mt-1'>{data?.name}</h3>
                <div className='flex justify-center gap-2 items-center mt-1'>
                    <Image src="/assets/home/star.png" width={20} height={18} />
                    <h3 className='josefin-sans-regular f-16'>{data?.rating}</h3>
                </div>
                <div className='flex justify-between mt-2'>
                    {discountPercentage ? (
                        <h3 className='text-color-orange josefin-sans-bold f-16'>PKR {discountedPrice}</h3>
                    ) : (
                        <h3 className='text-color-orange josefin-sans-bold f-16'>PKR {originalPrice}</h3>
                    )}
                    {discountPercentage ? (
                        <h3 className='text-light-black josefin-sans-regular f-16 line-through'>PKR {originalPrice}</h3>
                    ) : (
                        <h3 className='text-color-orange josefin-sans-bold f-16'></h3>
                    )}
                    {/* <h3 className='text-light-black josefin-sans-regular f-18 line-through'>{originalPrice} </h3> */}
                </div>
                <div className='flex justify-center gap-3 items-center mt-2 icon-product-card'>
                    <div onClick={handleAddtoWishlist} className='icon-container'>
                        <Image src="/assets/home/heart.png" width={20} height={20} />
                    </div>
                    <div onClick={(e) => handleAddtoCart(e, data)} className='icon-container'>
                        <Image src="/assets/home/bag.png" width={20} height={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard