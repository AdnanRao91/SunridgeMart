'user client'
import { Add, Remove } from "@mui/icons-material"
import Image from "next/image"
import { useState, useEffect } from "react"
import ImageMagnifier from "../../components/ImageMagnifier"
import { productDetailData } from "../../data"
import { Avatar, Divider, Rating } from "@mui/material"
import { get } from "@/api-services/index"
import { useRouter } from 'next/router';

const ProductDetail = ({ params }) => {

    const [count, setCount] = useState(0)
    const [selectedImage, setSelectedImage] = useState(productDetailData.images[0].url)
    const [productDetails, setProductDetails] = useState([])
    const router = useRouter();
    const { id } = router.query;
    console.log(router, "hello world")
    const handleSelectImage = (val) => {
        setSelectedImage(val)
    }
    useEffect(() => {
        if (id) {
          // Call your API function to fetch product details based on 'id'
        //   getProductData(id)
        //     .then((data) => {
        //       setProductDetails(data); // Update the state with fetched product details
        //     })
        //     .catch((error) => {
        //       console.error("Error fetching product details:", error);
        //     });
        const abc = 'Product/get-by-id/';
        get(abc + id).then((response) => {
            setProductDetails(response.data)
        })
        }
      }, [id]);
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
 const { query } = useRouter()
    return (
        <div className="container mx-auto" style={{
            display: 'inline-block',
            marginTop: '8rem'
        }}>
            <div className="grid grid-cols-12 justify-center mx-10 p-3 mt-3">
                <div className="col-span-4 flex justify-center">
                    <div
                        className="overflow-y-scroll h-60 p-2 no-scrollbar">
                        {
                            productDetailData.images.map((item, index) => {
                                return (
                                    <Image
                                        onClick={() => handleSelectImage(item.url)}
                                        key={item.id} style={{
                                            border: "1px solid #ccc",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                            marginTop: index == 0 ? "0px" : "5px"
                                        }} src={item.url} width={50} height={50} />
                                )
                            })
                        }
                    </div>
                    <ImageMagnifier width={"200px"} src={selectedImage} />
                </div>
                <div className="col-span-5">

                    <h1 className="nova-bold f-30 text-light-black">{productDetails?.category?.name}</h1>
                    <h2 className="f-14 text-light-black ">{productDetails?.description}</h2>
                    <div className='flex gap-2 items-center mt-1'>
                        <Image src="/assets/home/star.png" width={20} height={18} />
                        <h3 className='josefin-sans-regular f-16'>{productDetailData.rating}</h3>
                        <Divider className="h-5 border-gray-300 border" />
                        <h3 className='josefin-sans-regular f-16'>Reviews <span className="bg-orange-400 text-white text-sm mr-2 px-2.5 py-0.5 rounded ">200</span> </h3>
                    </div>
                    <h2 className="nova-bold f-24 f-16 text-color-orange mt-1">PKR {productDetails.price}</h2>
                    <div className="flex gap-2 border-2 border-orange-500 rounded-xl w-24 items-center justify-center mt-1">
                        <button onClick={() => setCount(count - 1)}><Remove /></button>
                        <h3 className="josefin-sans-regular f-16">{count}</h3>
                        <button onClick={() => setCount(count + 1)}><Add /></button>
                    </div>
                    <button className="bg-orange-500 nova-regular text-white p-2 rounded-md mt-3 uppercase">Add to cart</button>
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