import { productsData } from "../../../data"
import ProductCard from "../../ProductCard"
import ProductCardSkeleton from "../../ProductCardSkeleton"
const Listing = ({ products, isloading, handleAddtoCart }) => {
    
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
                    <div className={`${index > 3 ? 'mt-20' : 'mt-0'}`}>
                        <ProductCard handleAddtoCart={handleAddtoCart} data={item} />
                    </div>
                );
            })
        }
    }


    return (
        <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2 mt-24">
            {renderData()}
        </div>
    )
}

export default Listing