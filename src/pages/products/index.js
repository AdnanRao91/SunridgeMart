import Image from "next/image"
import SideFilter from "../../components/ProductsComponents/SideFilter"
import Listing from "../../components/ProductsComponents/Listing"


export default function Products() {

    return (
        <div className="mt-5">
            <Image alt="Products Banner" src="/assets/products/products-banner.png" width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} />
            <div className="grid grid-cols-12 mt-5 gap-10 p-5">
                <div className="col-span-4">
                    <SideFilter />
                </div>
                <div className="col-span-8">
                    <Listing />
                </div>
            </div>
        </div>
    )
}