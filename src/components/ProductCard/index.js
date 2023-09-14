import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'

const ProductCard = ({ data }) => {
    const router = useRouter()
    const { enqueueSnackbar } = useSnackbar();

    const handleAddtoWishlist = (e) => {
        e.stopPropagation();
        enqueueSnackbar('Product added to wishlist successfully', {
            variant: 'success',
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center',
            },
            autoHideDuration: 2000
        });
    }

    const handleAddtoCart = (e) => {
        e.stopPropagation();
        enqueueSnackbar('Product added to cart successfully', {
            variant: 'success',
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center',
            },
            autoHideDuration: 2000
        });
    }

    return (
        <div className="product-card-container" onClick={() => router.push(`/product-detail/${1}`)}>
            <div className="product-image">
                <Image src={data.image} width={80} height={0} style={{ margin: "0 auto", objectFit: "cover" }} />
                <div className='discount-container'>
                    <h2 className='f-16 proxima-regular text-white'>{data.discount}%</h2>
                </div>
            </div>
            <div className='content-container'>
                <h3 className='f-14 proxima-regular text-light-black'>{data.category.title}</h3>
                <h3 className='f-18 nova-bold text-light-black mt-1'>{data.title}</h3>
                <div className='flex justify-center gap-2 items-center mt-1'>
                    <Image src="/assets/home/star.png" width={20} height={18} />
                    <h3 className='josefin-sans-regular f-16'>{data.rating}</h3>
                </div>
                <div className='flex justify-between mt-2'>
                    <h3 className='text-color-orange josefin-sans-bold f-18'>PKR{data.price}</h3>
                    <h3 className='text-light-black josefin-sans-regular f-18 line-through'>PKR 640</h3>
                </div>
                <div className='flex justify-center gap-3 items-center mt-2'>
                    <div onClick={handleAddtoWishlist} className='icon-container'>
                        <Image src="/assets/home/heart.png" width={20} height={20} />
                    </div>
                    <div onClick={handleAddtoCart} className='icon-container'>
                        <Image src="/assets/home/bag.png" width={20} height={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard