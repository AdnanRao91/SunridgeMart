import { productsData } from "../../../data"
import ProductCard from "../../ProductCard"

const Listing = () => {
    return (
        <div className="grid gap-4 grid-cols-3">
            {productsData.map((item, index) => {
                return (
                    <div className={`${index > 2 ? 'mt-20' : 'mt-12'}`}>
                        <ProductCard data={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default Listing