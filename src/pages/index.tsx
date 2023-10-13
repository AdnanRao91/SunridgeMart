import Image from 'next/image'
import { Inter } from 'next/font/google'
import Exculsive from '../components/Exculsive'
import Banner from "@/components/HomeComponents/Banner"
const inter = Inter({ subsets: ['latin'] })
import ViewProducts from '../components/ViewProducts'
import TabSlider from '../components/TabSlider'
import MegaOffer from '../components/MegaOffer'
import FeaturedProductComponent from "../components/FeaturedProductComponent"
import DownloadApplication from '../components/DownloadApplication'
import CustomerReview from '../components/CustomerReview'
import React, { useEffect, useState } from 'react';
import { get, post } from "@/api-services/index";
import { useRouter } from 'next/router';
import { endPoints } from '@/constants'
import { SnackbarUtility, TokenStorage } from '@/utils'
import { handleGetCart } from '@/store/slices/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetWishlist } from '@/store/slices/Wishlist'

const categories = [
  {
    id: 1,
    name: "FORTIFIED ATTA",
    image: '/assets/home/sugar.png'
  },
  {
    id: 2,
    name: "PREMIUM QUALITY RICE",
    image: '/assets/home/icon-box.png'
  },
  {
    id: 3,
    name: 'IODIZED & PINK SALT',
    image: '/assets/home/flour.png'
  },
  {
    id: 4,
    name: 'COOKING OIL',
    image: '/assets/home/Beasan-Icon.png'
  },

];
const products = [
  {
    id: 1,
    name: "FORTIFIED ATTA",
    image: '/assets/products/atta.png'
  },
  {
    id: 2,
    name: "PREMIUM QUALITY MAIDA",
    image: '/assets/home/maida.png'
  },
  {
    id: 3,
    name: "PREMIUM QUALITY RICE",
    image: '/assets/home/rice-1.png'
  },
  {
    id: 4,
    name: 'IODIZED & PINK SALT',
    image: '/assets/home/salt.png'
  },
  {
    id: 5,
    name: 'COOKING OIL',
    image: '/assets/home/cooking-oil.png'
  },

];


const reviews = [
  {
    name: "MARIUM KHAN",
    comment: "Realy loved the quality of premium basmati rice",
    imageUrl: "/assets/home/Anwesha-Jalan.png",
  },
  {
    name: "SAAD AHMED",
    comment: "Premium Products and Excellent Services",
    imageUrl: "/assets/home/men.png",
  },
  {
    name: "MARIUM KHAN",
    comment: "Realy loved the quality of premium basmati rice",
    imageUrl: "/assets/home/Anwesha-Jalan.png",
  },
  {
    name: "MARIUM KHAN",
    comment: "Realy loved the quality of premium basmati rice",
    imageUrl: "/assets/home/Anwesha-Jalan.png",
  },
  {
    name: "MARIUM KHAN",
    comment: "Realy loved the quality of premium basmati rice",
    imageUrl: "/assets/home/Anwesha-Jalan.png",
  }
]

export default function Home() {
  const dispatch: any = useDispatch()
  const cart = useSelector((state) => state?.Cart?.cartItems);
  const wishList = useSelector((state) => state?.Wishlist?.wishlistItems);
  const [category, setcategory] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [isloading, setisLoading] = useState(false)
  const router = useRouter();
  const handleStorage = new TokenStorage
  const showSnackbar = new SnackbarUtility

  useEffect(() => {
    getAllCategories()
    // getCart()
    dispatch(handleGetCart(handleStorage.getGuid()))
    dispatch(handleGetWishlist(handleStorage.getGuid()))
  }, []);

  const getAllCategories = async () => {
    setisLoading(true)
    try {
      let response = await get(endPoints.getAllCategories)
      const updatedProducts: any = categories.map(localProduct => {
        const apiProduct = response.data.find((apiProduct: any) => apiProduct.name == localProduct.name);
        if (apiProduct) {
          return { ...apiProduct, imageURL: localProduct.image };
        }
      });
      setcategory(updatedProducts);
      setisLoading(false)
      getProductByCategrory(updatedProducts[0].id)
    } catch (error) {
      setisLoading(false)
      console.log(error, "errorerrorerrorerror")
    }
  }


  const getProductByCategrory = (id: any) => {
    setisLoading(true)
    const getURL = `${endPoints.getProductByCatId}/${id}`;
    get(getURL).then((response) => {
      const updatedProductss = response.data.products.map((apiProduct: any) => {
        const localProduct = products.find((localProd: any) => localProd.name === apiProduct.category);

        if (localProduct) {
          return { ...apiProduct, imageURL: localProduct.image };
        }
      });
      setProductCategory(updatedProductss?.slice(0, 4));
      setisLoading(false)
    }).catch((err) => {
      setisLoading(false)
    })
  };

  const CategoryDataa = (id: any) => {
    getProductByCategrory(id)
  }

  const productPage = () => {
    router.push('/products')
  }
  const handleAddtoCart = (e: Event, data: object) => {
    e.stopPropagation();
    let payload = {
      customerId: handleStorage.getGuid(),
      productId: data.id,
      quantity: 1
    }
    post(`${endPoints.addToCart}?customerId=${handleStorage.getGuid()}`, payload).then((response) => {
      if (response.code == 200) {
        showSnackbar.successMessage(response.message)
        dispatch(handleGetCart(handleStorage.getGuid()))
      } else {
        showSnackbar.errorMessage(response.message)
      }
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }


  const handleWishList = (e: Event, data: object) => {
    e.stopPropagation();
    let payload = {
      customerId: handleStorage.getGuid(),
      productId: data.id
    }
    const apiUrl = 'WishList/add-to-wishlist';
    post(`${apiUrl}?customerId=${handleStorage.getGuid()}`, payload).then((response) => {
      if (response.code === 200) {
        showSnackbar.successMessage(response.message)
        dispatch(handleGetWishlist(handleStorage.getGuid()))
      }
    }).catch((error) => {
      showSnackbar.errorMessage(error.message)
    })
  }

  return (

    <div>
      <Banner />
      <Exculsive />
      <div className="product-img-background">
        <div className="lg:px-20 lg:mt-16 xs:mt-16 sm:mt-16 sm:px-10 xs:px-7 md:mt-16 md:px-10">
          <TabSlider isloading={isloading} tabCategory={category} CategoryData={CategoryDataa} />
        </div>
        <div className="py-12 px-20">
          <ViewProducts cart={cart} wishlist={wishList} handleAddToWishList={handleWishList} isloading={isloading} handleAddtoCart={handleAddtoCart} products={productCategory} />
          <div className='flex justify-center my-4'>
            <button onClick={productPage} className='f-16 nova-bold text-white bg-orange rounded-lg px-4 py-2'>Show More</button>
          </div>
        </div>
      </div>
      <MegaOffer />
      <FeaturedProductComponent featuredProducts={productCategory} cart={cart} wishlist={wishList} handleAddToWishList={handleWishList} handleAddtoCart={handleAddtoCart} />
      <DownloadApplication />
      <CustomerReview review={reviews} />
    </div>
  )
}
