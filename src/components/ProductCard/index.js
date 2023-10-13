import { FavoriteBorderOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'


const ProductCard = ({ data, handleAddtoCart, cart, handleAddToWishList, wishlist, handleRemoveCart, handleRemoveWishList }) => {
    const [originalPrice, setOriginalPrice] = useState([]);
    const [discountPercentage, setDiscountPercentage] = useState([]);
    const [discountedPrice, setDiscountedPrice] = useState([]);
    const router = useRouter()
    const isDisabled = cart?.some((item) => item.product.id == data.id)
    const isDisabledWishlist = wishlist?.some((item) => item.id == data.id)

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
        setDiscountPercentage(data?.discount || 0);
        setOriginalPrice(data?.price || 0);
    }, [data]);

    const handleWishList = (e, data) => {
        if (isDisabledWishlist) {
            handleRemoveWishList(e, data)
        } else {
            handleAddToWishList(e, data)
        }
    }

    const handleCart = (e, data) => {
        if (isDisabled) {
            handleRemoveCart(e, data)
        } else {
            handleAddtoCart(e, data)
        }
    }

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
                    <button onClick={(e) => handleWishList(e, data)} className={`icon-container ${isDisabledWishlist ? 'bg-orange-500' : ''}`}>
                        {/* <Image src="/assets/home/heart.png" width={20} height={20} /> */}
                        <FavoriteBorderOutlined className={`${isDisabledWishlist ? 'text-white' : 'text-orange-500'}`} />
                    </button>
                    <button onClick={(e) => handleCart(e, data)} className={`icon-container ${isDisabled ? 'bg-orange-500' : ''}`}>
                        {/* <Image src="/assets/home/bag.png" width={20} height={20} /> */}
                        <ShoppingBagOutlined className={`${isDisabled ? 'text-white' : 'text-orange-500'}`} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard