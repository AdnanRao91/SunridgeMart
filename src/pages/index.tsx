import Image from 'next/image'
import { Inter } from 'next/font/google'
import Exculsive from '../components/exculsive'
import Products from '../components/Products'
const inter = Inter({ subsets: ['latin'] })
const tabsData = [
  {
    label: { name: 'sugar' , image: '/assets/home/sugar.png'},
    content: <div>This is the content of Tab 1</div>,
  },
  {
    label: { name: 'Ration Box' , image: '/assets/home/supplies.png'},
    content: <div>This is the content of Tab 1</div>,
  },
  {
    label: { name: 'Rice' , image: '/assets/home/sugar.png'},
    content: <div>This is the content of Tab 1</div>,
  },
  {
    label: { name: 'Value Bundle' , image: '/assets/home/sugar.png'},
    content: <div>This is the content of Tab 1</div>,
  },
  {
    label: { name: 'Besan' , image: '/assets/home/sugar.png'},
    content: <div>This is the content of Tab 1</div>,
  },
  {
    label: { name: 'Suji' , image: '/assets/home/sugar.png'},
    content: <div>This is the content of Tab 1</div>,
  },
  {
    label: { name: 'Maida' , image: '/assets/home/sugar.png'},
    content: <div>This is the content of Tab 1</div>,
  },

];
export default function Home() {
 
  return (
 <>
 <div>
  <Exculsive />
  <Products tabs={tabsData} />
  </div>
 </>
  )
}
