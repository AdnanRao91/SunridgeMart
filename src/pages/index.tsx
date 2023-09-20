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
import { get } from "@/api-services/index";

const categories = [
  {
    id: 1,
    name: "FORTIFIED ATTA",
    image: '/assets/home/sugar.png'
  },
  {
    id: 2,
    name: "PREMIUM QUALITY MAIDA",
    image: '/assets/home/supplies.png'
  },
  {
    id: 3,
    name: "PREMIUM QUALITY RICE",
    image: '/assets/home/icon-box.png'
  },
  {
    id: 4,
    name: 'IODIZED & PINK SALT',
    image: '/assets/home/flour.png'
  },
  {
    id: 5,
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
    image: '/assets/home/Beasan-Icon.png'
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
    getAllProducts()
    getAllCategories()
  }, []);

  const getAllProducts = async () => {
    try {
      const apiUrl = 'Product/get-all';
      let response = await get(apiUrl)
      const updatedProductCat = response.data.map((apiProduct: any) => {
        const localProduct = products.find((localProd: any) => localProd.id === apiProduct.category.id);

        if (localProduct) {
          return { ...apiProduct, imageURL: localProduct.image };
        }
      });
      setProductFeatures(updatedProductCat);
    } catch (error) {
      console.log(error, "errorerrorerrorerror")
    }
  }

  const getAllCategories = async () => {
    try {
      const apiUrl = 'Category/get-all';
      let response = await get(apiUrl)
      const updatedProducts = categories.map(localProduct => {
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

  //tab category



  //Product category
  const getProductByCategrory = (id: any) => {
    const getURL = `Product/get-by-category-id/${id}`;
    get(getURL).then((response) => {
      const updatedProductss = response.data.map((apiProduct: any) => {
        const localProduct = products.find((localProd: any) => localProd.id === apiProduct.category.id);

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
  return (
    <div>
      <Banner />
      <Exculsive />
      <div className="px-20 product-img-background">
        <div className="">
          <TabSlider tabCategory={category} CategoryData={CategoryDataa} />
        </div>
        <div className="py-12">
          <ViewProducts products={productCategory} />
        </div>
      </div>
      <MegaOffer />
      <FeaturedProductComponent featuredProducts={productFeatures} />
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
