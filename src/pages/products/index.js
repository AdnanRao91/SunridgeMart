import Image from "next/image"
import SideFilter from "../../components/ProductsComponents/SideFilter"
import Listing from "../../components/ProductsComponents/Listing"
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs"
import GlobalPagination from "../../components/GlobalPagination"
import { useState, useEffect } from "react"
import { get, post } from "../../api-services/index"


export default function Products() {

  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const productsData = [
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
      id: 3,
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
    getAllCategories()
    getAllBrands()
    getProducts()
  }, []);

  const getAllCategories = () => {
    const apiUrl = 'Category/get-all';
    get(apiUrl).then((response) => {
      setCategory(response.data)
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  const getAllBrands = () => {
    const apiUrl = 'Brand/get-all';
    get(apiUrl).then((response) => {
      setBrands(response.data)
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }


  const getProducts = (payload) => {
    const getURL = `Product/get-all`;
    post(getURL, payload || {}).then((response) => {
      const updatedProducts = response.data.products.map((apiProduct) => {
        const localProduct = productsData.find((localProd) => localProd.name === apiProduct.category);
        if (localProduct) {
          return { ...apiProduct, imageURL: localProduct.image };
        }
      });
      setProducts(updatedProducts);
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
            <SideFilter categoryList={category} brands={brands} getProducts={getProducts} />
          </div>
          <div className="col-span-10">
            <GlobalPagination
              currentPage={currentPage}
              limit={limit}
              onPageChange={handlePageChange}
            />
            <Listing products={products} />
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