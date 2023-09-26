import Image from "next/image"
import SideFilter from "../../components/ProductsComponents/SideFilter"
import Listing from "../../components/ProductsComponents/Listing"
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs"
import { useState, useEffect } from "react"
import { get, post } from "../../api-services/index"
import { TablePagination } from "@mui/material"
import { getBreadcrumbs } from "../../utils"
import { useRouter } from "next/router"


export default function Products() {
  const router = useRouter()
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [payload, setPayload] = useState({})
  const [isloading, setisLoading] = useState(false)
  // const breadcrumbs = getBreadcrumbs(router.pathname);

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


  const getProducts = (params) => {
    setisLoading(true)
    const getURL = `Product/get-all`;
    post(getURL, params || {}).then((response) => {
      const updatedProducts = response.data.products.map((apiProduct) => {
        const localProduct = productsData.find((localProd) => localProd.name === apiProduct.category);
        if (localProduct) {
          return { ...apiProduct, imageURL: localProduct.image };
        }
      });
      setProducts(updatedProducts);
      setisLoading(false)
    }).catch((err) => {
      setisLoading(false)
    })
  };

  const handlePageChange = (e, pageNumber) => {
    setCurrentPage(pageNumber);
    let params = {
      ...payload,
      pageIndex: pageNumber + 1,
      pageSize: limit
    }
    getProducts(params)
  };

  const handleChangeLimit = (event) => {
    setLimit(parseInt(event.target.value, 10))
    setCurrentPage(0)
    let params = {
      ...payload,
      pageIndex: 0,
      pageSize: event.target.value
    }
    getProducts(params)
  }

  const handleAddtoCart = (e, data) => {
    e.stopPropagation();
    let userId = "d07792cb-44d9-42a9-9578-165f122cf8e9"
    let payload = [{
      customerId: userId,
      productId: data?.id,
      quantity: 1
    }]
    console.log(payload, "payloadpayload")
    const apiUrl = 'CartItem/create';
    post(apiUrl, payload).then((response) => {
      console.log(response.data, "datadatadata")
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    // enqueueSnackbar('Product added to cart successfully', {
    //     variant: 'success',
    //     anchorOrigin: {
    //         vertical: 'top',
    //         horizontal: 'center',
    //     },
    //     autoHideDuration: 2000
    // });
  }


  return (
    <div className="top-spacing">
      <Image alt="Products Banner" src="/assets/products/products-banner.png" width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} />
      <div className="mt-5">
        <h1 className="text-4xl nova-bold text-center">Products</h1>
        <div className="grid grid-cols-12 mt-5 gap-5 p-5">
          <div className="xs:col-span-12 md:col-span-2">
            {/* <CustomBreadcrumbs breadcrumbs={breadcrumbs} /> */}
            <SideFilter setCurrentPage={setCurrentPage} setLimit={setLimit} payload={payload} setPayload={setPayload} categoryList={category} brands={brands} getProducts={getProducts} />
          </div>
          <div className="col-span-10">
            {/* <GlobalPagination
              currentPage={currentPage}
              limit={limit}
              onPageChange={handlePageChange}
              handleChangeLimit={handleChangeLimit}
            /> */}
            <TablePagination
              component="div"
              onPageChange={handlePageChange}
              page={currentPage}
              count={30}
              rowsPerPage={limit}
              onRowsPerPageChange={handleChangeLimit}
              rowsPerPageOptions={[5, 10, 15, 20]}
            />

            {
              products?.length > 0 ?
                <Listing handleAddtoCart={handleAddtoCart} isloading={isloading} products={products} />
                :
                <div>
                  <h3 className="text-center">No Products Found</h3>
                </div>
            }

            <TablePagination
              component="div"
              onPageChange={handlePageChange}
              page={currentPage}
              count={30}
              rowsPerPage={limit}
              onRowsPerPageChange={handleChangeLimit}
              rowsPerPageOptions={[5, 10, 15, 20]}
            />

          </div>
        </div>
      </div>

    </div>
  )
}