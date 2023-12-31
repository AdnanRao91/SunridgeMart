import { productsData } from "../../../data"
import ProductCard from "../../ProductCard"
import ProductCardSkeleton from "../../ProductCardSkeleton"
const Listing = ({ products, handleAddtoCart, isloading, cart, handleAddToWishList, wishlist, handleRemoveCart, handleRemoveWishList }) => {

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
                    <div className={`${index > 3 ? 'mt-20' : 'mt-20'} lg:w-1/4 md:w-1/2 sm:w-full xs:w-full`}>
                        <ProductCard handleRemoveWishList={handleRemoveWishList} handleRemoveCart={handleRemoveCart} handleAddtoCart={handleAddtoCart} data={item} handleAddToWishList={handleAddToWishList} wishlist={wishlist} cart={cart} />
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