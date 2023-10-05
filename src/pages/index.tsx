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
import { TokenStorage } from '../utils/index';
import { SnackbarUtility } from '../utils/index'

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
  const [category, setcategory] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [cart, setCart] = useState([])
  const [wishList, setWishList] = useState([])
  const [isloading, setisLoading] = useState(false)
  const router = useRouter();
  const snackBar = new SnackbarUtility
  const handlestorage = new TokenStorage
  useEffect(() => {
    getAllCategories()
    getCart()
    handleGetWishlistItem()
  }, []);

  const getAllCategories = async () => {
    setisLoading(true)
    try {
      const apiUrl = 'Category/get-all';
      let response = await get(apiUrl)
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

  const getCart = () => {
    const apiURl = 'CartItem/get-cartitems-by-customerId/'
    get(apiURl + handlestorage.getGuid()).then((response) => {
      setCart(response?.data?.productWithQuantity)
    })
  }


  const getProductByCategrory = (id: any) => {
    setisLoading(true)
    const getURL = `Product/get-by-category-id/${id}`;
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

  const handleStorage = new TokenStorage
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
      quantity: 1,
    }
    const apiUrl = 'CartItem/AddToCart';
    post(`${apiUrl}?customerId=${handleStorage.getGuid()}`, payload).then((response) => {
      if (response.code === 200) {
        snackBar.successMessage(response.message)
        getCart()
      }
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  const handleGetWishlistItem = () => {
    const apiUrl = 'WishList/get-wishlistItems-by-customerId/'
    get(apiUrl + handleStorage.getGuid()).then((response) => {
      setWishList(response?.data?.product)
    }).catch((error) => {
      snackBar.errorMessage(error.message)
    })
}
  const handleWishList = (e: Event, data: object) => {
    e.stopPropagation();
    let payload = {
      customerId: handleStorage.getGuid(),
      productId: data.id
    }
    const apiUrl = 'WishList/add-to-wishlist';
    post(`${apiUrl}?customerId=${handleStorage.getGuid()}`, payload).then((response) => {
      if(response.code === 200){
        snackBar.successMessage(response.message)
        handleGetWishlistItem()
      }
    }).catch((error) => {
      snackBar.errorMessage(error.message)
    })
  }

  return (

    <div>
      <Banner />
      <Exculsive />
      <div className="px-20 product-img-background">
        <div className="">
          <TabSlider isloading={isloading} tabCategory={category} CategoryData={CategoryDataa} />
        </div>
        <div className="py-12">
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
