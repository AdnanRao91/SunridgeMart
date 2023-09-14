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

const categories = [
  {
    name: "Sugar",
    image: '/assets/home/sugar.png'
  },
  {
    name: "Ration box",
    image: '/assets/home/sugar.png'
  },
  {
    name: "Rice",
    image: '/assets/home/sugar.png'
  },
  {
    name: 'Value Bandle',
    image: '/assets/home/sugar.png'
  },
  {
    name: 'Baisan',
    image: '/assets/home/sugar.png'
  },
  {
    name: 'Suji',
    image: '/assets/home/sugar.png'
  },
  {
    name: 'Maida',
    image: '/assets/home/sugar.png'
  },

];

const subcategories = [
  [
    {
      name: "Sugar",
      category: "Sugar"
    },
    {
      name: "Flour",
      category: "Special Aata"
    },
    {
      name: "Flour",
      category: "Fortified Aata"
    },
    {
      name: "Rice",
      category: "Sela"
    }
  ]
]

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

  return (
    <div>
      <Banner />
      <Exculsive />
      <div className="px-20 product-img-background">
        <div className="">
          <TabSlider tabs={categories} />
        </div>
        <div className="py-12">
          <ViewProducts />
        </div>
      </div>
      <MegaOffer />
      <FeaturedProductComponent />
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
