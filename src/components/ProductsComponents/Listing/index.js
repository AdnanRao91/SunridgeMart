import { productsData } from "../../../data"
import ProductCard from "../../ProductCard"

const Listing = ({products}) => {
    return (
        <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2 mt-24">
            {products.map((item, index) => {
                return (
                    <div className={`${index > 3 ? 'mt-20' : 'mt-0'}`}>
                        <ProductCard data={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default Listing