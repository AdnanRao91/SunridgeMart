import { productsData } from "@/data"
import ProductCard from "../ProductCard"
export default function ViewProducts(){
    return(
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {productsData.map((item, index) => {
            return (
                <div className={`${index > 3 ? 'mt-20' : 'xs:mt-24 lg:mt-12'}`}>
                    <ProductCard data={item} />
                </div>
            )
        })}
    </div>
    )
}