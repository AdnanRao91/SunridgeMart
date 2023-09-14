import Image from "next/image"
import SideFilter from "../../components/ProductsComponents/SideFilter"
import Listing from "../../components/ProductsComponents/Listing"
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs"
import GlobalPagination from "../../components/GlobalPagination"
import { useState } from "react"

export default function Products() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
    <div className="top-spacing">
            <Image alt="Products Banner" src="/assets/products/products-banner.png" width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} />
            <div className="mt-5">
                <h1 className="text-4xl nova-bold text-center">Products</h1>
                <div className="grid grid-cols-12 mt-5 gap-5 p-5">
                    <div className="col-span-2">
                        <CustomBreadcrumbs />
                        <SideFilter />
                    </div>
                    <div className="col-span-10">
                        <GlobalPagination
                            currentPage={currentPage}
                            limit={limit}
                            onPageChange={handlePageChange}
                        />
                        <Listing />
                        <GlobalPagination
                            currentPage={currentPage}
                            limit={limit}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}