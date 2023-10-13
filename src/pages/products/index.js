import Image from "next/image"
import SideFilter from "../../components/ProductsComponents/SideFilter"
import Listing from "../../components/ProductsComponents/Listing"
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs"
import { useState, useEffect } from "react"
import { deleteRequest, get, post } from "../../api-services/index"
import { TablePagination } from "@mui/material"
import { getBreadcrumbs } from "../../utils"
import { useRouter } from "next/router"
import { endPoints } from "../../constants"

import { TokenStorage } from '../../utils/index';
import { SnackbarUtility } from '../../utils/index'
import { useDispatch, useSelector } from "react-redux"
import { handleGetCart } from "../../store/slices/Cart"
import { handleGetWishlist } from "../../store/slices/Wishlist"

export default function Products() {
  const dispatch = useDispatch()
  const cartData = useSelector((state) => state?.Cart?.cartItems);
  const wishList = useSelector((state) => state?.Wishlist?.wishlistItems);
  const [category, setCategory] = useState([]); 
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [payload, setPayload] = useState({})
  const [isloading, setisLoading] = useState(false)
  const snackBar = new SnackbarUtility
  const handleStorage = new TokenStorage
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
    dispatch(handleGetCart(handleStorage.getGuid()))
    dispatch(handleGetWishlist(handleStorage.getGuid()))
  }, []);

  const getAllCategories = () => {
    get(endPoints.getAllCategories).then((response) => {
      setCategory(response.data)
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  const getAllBrands = () => {
    get(endPoints.getAllBrands).then((response) => {
      setBrands(response.data)
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }


  const getProducts = (params) => {
    setisLoading(true)
    post(endPoints.getAllProducts, params || {}).then((response) => {
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
    let payload = {
      customerId: handleStorage.getGuid(),
      productId: data.id,
      quantity: 1,
    }
    const apiUrl = 'CartItem/AddToCart';
    post(`${apiUrl}?customerId=${handleStorage.getGuid()}`, payload).then((response) => {
      if (response.code === 200) {
        snackBar.successMessage(response.message)
        dispatch(handleGetCart(handleStorage.getGuid()))
      }
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  const handleRemoveCart = async (e, data) => {
    e.stopPropagation();
    try {
      let payload = {
        id: 0,
        customerId: handleStorage.getGuid(),
        productId: data.id,
        quantity: 0
      }
      let response = await deleteRequest(`${endPoints.deleteCart}?customerId=${handleStorage.getGuid()}`, payload)
      dispatch(handleGetCart(handleStorage.getGuid()))
    } catch (error) {
      console.log(error, "errorerror")
    }
  };

  const handleWishList = (e, data) => {
    e.stopPropagation();
    let payload = {
      customerId: handleStorage.getGuid(),
      productId: data.id
    }
    const apiUrl = 'WishList/add-to-wishlist';
    post(`${apiUrl}?customerId=${handleStorage.getGuid()}`, payload).then((response) => {
      if(response.code === 200){
        snackBar.successMessage(response.message)
        dispatch(handleGetWishlist(handleStorage.getGuid()))
      }
    }).catch((error) => {
      snackBar.errorMessage(error.message)
    })
  }

  const handleRemoveWishList = async (e, data) => {
    e.stopPropagation();
    try {
        let payload = {
            id: 0,
            customerId: handleStorage.getGuid(),
            productId: data.id,
        }
        let response = await deleteRequest(`${endPoints.deleteWishlist}?customerId=${handleStorage.getGuid()}`, payload)
        dispatch(handleGetWishlist(handleStorage.getGuid()))
    } catch (error) {
        console.log(error, "errorerror")
    }
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
          <div className="xs:col-span-12 md:col-span-2">
            {/* <CustomBreadcrumbs breadcrumbs={breadcrumbs} /> */}
            <SideFilter setCurrentPage={setCurrentPage} setLimit={setLimit} payload={payload} setPayload={setPayload} categoryList={category} brands={brands} getProducts={getProducts} />
          </div>
          <div className="col-span-10">
            <TablePagination
              component="div"
              onPageChange={handlePageChange}
              page={currentPage}
              count={30}
              rowsPerPage={limit}
              onRowsPerPageChange={handleChangeLimit}
              rowsPerPageOptions={[5, 10, 15, 20]}
            />
            <Listing handleRemoveWishList={handleRemoveWishList} cart={cartData} wishlist={wishList} handleRemoveCart={handleRemoveCart} handleAddToWishList={handleWishList} isloading={isloading} handleAddtoCart={handleAddtoCart} products={products} />
            {
              products?.length < 0 ?
                <div>
                  <h3 className="text-center">No Products Found</h3>
                </div>
                :
                ""
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