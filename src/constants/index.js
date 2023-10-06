// Api endpoints




export const endPoints = {
    // Account
    login: "Account/login",
    register: "Account/register",
    resetPassword: "Account/reset-password",
    forgotPassword: "Account/forgot-password",

    //Customer
    registerCustomer: "Customer/RegisterCustomer",

    //Products
    getAllProducts: "Product/get-all",
    getProductDetail: "Product/get-by-id",
    getProductByCatId: "Product/get-by-category-id",
    //Brands
    getAllBrands: "Brand/get-all",

    //Categories
    getAllCategories: "Category/get-all",

    //Cart
    addToCart: "CartItem/AddToCart",
    updateCart: "CartItem/update",
    deleteCart: "CartItem/delete",
    getCart: "CartItem/get-cartitems-by-customerId",

    //Wishlist
    deleteWishlist: "WishList/delete",
    getWishlist: "WishList/get-wishlistItems-by-customerId"
}