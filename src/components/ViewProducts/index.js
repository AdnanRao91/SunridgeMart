import { productsData } from "@/data"
import ProductCard from "../ProductCard"
export default function ViewProducts({products}){
    return(
        <div className="grid justify-center flex gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {products && products.length > 0 ? (
          products.map((item, index) => {
            return (
              <div className={`${index > 3 ? 'mt-20' : 'xs:mt-24 lg:mt-12'}`} key={index}>
                <ProductCard data={item} />
              </div>
            );
          })
        ) : (
          <div className="josefin-sans-bold f-24 black-text">Product will be Available Soon....</div>
        )}
      </div>
    )
}