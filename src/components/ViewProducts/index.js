import { productsData } from "@/data"
import ProductCard from "../ProductCard"
export default function ViewProducts(){
    return(
        <div className="lg:grid gap-4 lg:grid-cols-4 sm:grid-cols-1">
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