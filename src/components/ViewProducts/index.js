import { productsData } from "@/data"
import ProductCard from "../ProductCard"
import ProductCardSkeleton from "../ProductCardSkeleton"

export default function ViewProducts({ products, handleAddtoCart, isloading }) {

  const renderData = () => {
    if (isloading) {
     return products.map((item, index) => {
        return (
          <div className={`${index > 3 ? 'mt-20' : 'xs:mt-24 lg:mt-12'}`} key={index}>
            <ProductCardSkeleton />
          </div>
        );
      })
    } else {
      return products.map((item, index) => {
        return (
          <div className={`${index > 3 ? 'mt-20' : 'xs:mt-24 lg:mt-12'}`} key={index}>
            <ProductCard handleAddtoCart={handleAddtoCart} data={item} />
          </div>
        );
      })
    }
  }

  return (
    <div className="grid justify-center flex gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {renderData()}
    </div>
  )
}