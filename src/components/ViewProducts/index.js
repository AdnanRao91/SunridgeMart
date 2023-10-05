import { productsData } from "@/data"
import ProductCard from "../ProductCard"
import ProductCardSkeleton from "../ProductCardSkeleton"

export default function ViewProducts({ products, handleAddtoCart, isloading, cart, handleAddToWishList, wishlist }) {

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
          <div className={`${index > 3 ? 'mt-20' : 'xs:mt-24 lg:mt-12'} lg:w-1/5 md:w-1/2 sm:w-full xs:w-full`} key={index}>
            <ProductCard handleAddToWishList={handleAddToWishList} wishlist={wishlist} handleAddtoCart={handleAddtoCart} data={item} cart={cart} />
          </div>
        );
      })
    }
  }

  return (
    <div className="flex justify-center flex-wrap gap-4">
      {renderData()}
    </div>
  )
}