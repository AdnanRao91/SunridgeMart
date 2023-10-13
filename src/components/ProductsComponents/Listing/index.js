import { productsData } from "../../../data"
import ProductCard from "../../ProductCard"
import ProductCardSkeleton from "../../ProductCardSkeleton"
const Listing = ({ products, handleAddtoCart, isloading, cart, handleAddToWishList, wishlist }) => {
    
    const renderData = () => {
        if (isloading) {
            return products?.map((item, index) => {
                return (
                    <div className={`${index > 3 ? 'mt-20' : 'mt-0'}`}>
                        <ProductCardSkeleton />
                    </div>
                );
            })
        } else {
            return products?.map((item, index) => {
                return (
                    <div className={`${index > 3 ? 'mt-20' : 'mt-20'} lg:w-1/4 md:w-w-4/12 sm:w-2/5 xs:w-3/4`}>
                        <ProductCard handleAddtoCart={handleAddtoCart} data={item} handleAddToWishList={handleAddToWishList} wishlist={wishlist} cart={cart}/>
                    </div>
                );
            })
        }
    }


    return (
        <div className="flex-wrap flex gap-4 justify-center">
            {renderData()}
        </div>
    )
}

export default Listing