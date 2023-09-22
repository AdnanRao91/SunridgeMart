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
import ContactFooter from '@/components/ContactFooter'
import React, { useEffect, useState } from 'react';
import { get, post } from "@/api-services/index";

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
  const [productFeatures, setProductFeatures] = useState([])


  useEffect(() => {
    // getAllProducts()
    getAllCategories()
  }, []);

  // const getAllProducts = async () => {
  //   try {
  //     const apiUrl = 'Product/get-all';
  //     let response = await get(apiUrl)
  //     const updatedProductCat = response.data.map((apiProduct: any) => {
  //       const localProduct = products.find((localProd: any) => localProd.name === apiProduct.category.name);

  //       if (localProduct) {
  //         return { ...apiProduct, imageURL: localProduct.image };
  //       }
  //     });
  //     setProductFeatures(updatedProductCat);
  //   } catch (error) {
  //     console.log(error, "errorerrorerrorerror")
  //   }
  // }

  const getAllCategories = async () => {
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
      getProductByCategrory(updatedProducts[0].id)
    } catch (error) {
      console.log(error, "errorerrorerrorerror")
    }
  }

  //  const getAllProducts = () => {
  //   const getURL = `Product/get-all`;
  //   get(getURL).then((response) => {
  //     const updatedProductss = response.data.products.map((apiProduct: any) => {
  //       const localProduct = products.find((localProd: any) => localProd.name === apiProduct.category);

  //       if (localProduct) {
  //         return { ...apiProduct, imageURL: localProduct.image };
  //       }
  //     });
  //     setProductCategory(updatedProductss);
  //   });
  //  }
  //Product category
  const getProductByCategrory = (id: any) => {
    const getURL = `Product/get-by-category-id/${id}`;
    get(getURL).then((response) => {
      const updatedProductss = response.data.products.map((apiProduct: any) => {
        const localProduct = products.find((localProd: any) => localProd.name === apiProduct.category);

        if (localProduct) {
          return { ...apiProduct, imageURL: localProduct.image };
        }
      });
      setProductCategory(updatedProductss);
    });
  };

  //  useEffect(() => {
  //   CategoryDataa(1)
  //  })
  const CategoryDataa = (id: any) => {
    getProductByCategrory(id)
  }

  function uuidToBigInt(uuid: string) {
    const hexString = uuid.replace(/-/g, '');
    const bigintValue = BigInt(`0x${hexString}`);
    return bigintValue;
  }


  const handleAddtoCart = (e: Event, data: object) => {
    e.stopPropagation();
    let userId = "d07792cb-44d9-42a9-9578-165f122cf8e9"
    let payload = [{
      customerId: userId,
      productId: data?.id,
      quantity: 1
    }]
    console.log(payload, "payloadpayload")
    const apiUrl = 'CartItem/create';
    post(apiUrl, payload).then((response) => {
      console.log(response.data, "datadatadata")
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    // enqueueSnackbar('Product added to cart successfully', {
    //     variant: 'success',
    //     anchorOrigin: {
    //         vertical: 'top',
    //         horizontal: 'center',
    //     },
    //     autoHideDuration: 2000
    // });
  }

  return (

    <div>
      <Banner />
      <Exculsive />
      <div className="px-20 product-img-background">
        <div className="">
          <TabSlider tabCategory={category} CategoryData={CategoryDataa} />
        </div>
        <div className="py-12">
          <ViewProducts handleAddtoCart={handleAddtoCart} products={productCategory} />
        </div>
      </div>
      <MegaOffer />
      <FeaturedProductComponent featuredProducts={productCategory} />
      <DownloadApplication />
      <CustomerReview review={reviews} />
      {/* <div className="grid gap-4 grid-cols-3">
            {productsData.map((item, index) => {
                return (
                    <div className={`${index > 2 ? 'mt-20' : 'mt-12'}`}>
                        <Products data={item} tabs={categories}/>
                    </div>
                )
            })}
        </div> */}


    </div>
  )
}
