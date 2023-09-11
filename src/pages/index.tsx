import Image from 'next/image'
import { Inter } from 'next/font/google'
import Exculsive from '../components/exculsive'
import Products from '../components/Products'
import Banner from "@/components/HomeComponents/Banner"
const inter = Inter({ subsets: ['latin'] })

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

const products =[
  {
    name:"Sweet sugar",
    category:"Sugar",
    subCategory:"Sugar",
    brand:"Sunridge",
    price: 230,
    quantity: 120,
    discountPercent: 10,
    imageUrl:"/assets/home/red-rice.png",
    rating:4.5    
  },
  {
    name:"Basmati Rice",
    category:"Rice",
    subCategory:"Rice",
    brand:"Sunridge",
    price: 340,
    quantity: 40,
    discountPercent: 8,
    imageUrl:"/assets/home/red-rice.png",
    rating:5   
  }
]

export default function Home() {

  return (
    <div>
      <Banner />
      <Exculsive />
      <Products tabs={categories} product={products} />
    </div>
  )
}
