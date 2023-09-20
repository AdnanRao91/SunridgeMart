import Image from "next/image"
import SideFilter from "../../components/ProductsComponents/SideFilter"
import Listing from "../../components/ProductsComponents/Listing"
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs"
import GlobalPagination from "../../components/GlobalPagination"
import { useState, useEffect } from "react"
import { get } from "../../api-services/index"


export default function Products() {

    const [data, setData] = useState([]);
    const [category, setcategory] = useState([]);
    const [productCategory, setProductCategory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const products = [
        {
          id: 1,
          name: "FORTIFIED ATTA",
          image: '/assets/products/atta.png'
        },
        {
          id: 2,
          name: "PREMIUM QUALITY MAIDA",
          image: '/assets/home/maida.png'
        },
        {
          id:3,
          name: "PREMIUM QUALITY RICE",
          image: '/assets/home/rice-1.png'
        },
        {
          id: 4,
          name: 'IODIZED & PINK SALT',
          image: '/assets/home/salt.png'
        },
        {
          id: 5,  
          name: 'COOKING OIL',
          image: '/assets/home/Beasan-Icon.png'
        },
      
      ];
    useEffect(() => {
        getDataByID()
      },[]);

  const getDataByID = () => {
    const apiUrl = 'Category/get-all'; // Replace with your API endpoint
    
    // Call the get function to fetch data
    get(apiUrl).then((response) => {
       setcategory(response.data)
       changeCategorys(response.data[0].id)
        // setcategory(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
      const changeCategorys = (id) => {
        const getURL = 'Product/get-by-category-id/';
        get(getURL + id).then((response) => {
          const updatedProductss = response.data.map((apiProduct) => {
            const localProduct = products.find((localProd) => localProd.id === apiProduct.category.id);
      
            if (localProduct) {
              return { ...apiProduct, imageURL: localProduct.image };
            }
          });
          setProductCategory(updatedProductss);
        });
      };
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
                        <SideFilter categoryList={category} changeCategory={changeCategorys}/>
                    </div>
                    <div className="col-span-10">
                        <GlobalPagination
                            currentPage={currentPage}
                            limit={limit}
                            onPageChange={handlePageChange}
                        />
                        <Listing products={productCategory}/>
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