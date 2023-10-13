import { createSlice } from "@reduxjs/toolkit"
import { get } from "../../../api-services"
import { endPoints } from "../../../constants"

export const initialState = {
    loading: false,
    hasErrors: false,
    cartItems: [],
    subTotal: 0,
    taxAmount: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        getCart: state => {
            state.loading = true
        },
        getCartSuccess: (state, { payload }) => {
            state.cartItems = payload
            state.subTotal = calculateOrderTotal(payload)
            state.loading = false
            state.hasErrors = false
        },
        getCartFailure: (state, { payload }) => {
            state.loading = false
            state.hasErrors = payload
        },
        getTaxData: (state, { payload }) => {
            state.taxAmount = payload.taxAmount
            state.totalPrice = payload.totalPriceWithTax
        }
    },
})

export const { getCart, getCartSuccess, getCartFailure, getTaxData } = cartSlice.actions
export default cartSlice.reducer
export function handleGetCart(id) {
    return async dispatch => {
        dispatch(getCart())
        get(`${endPoints.getCart}/${id}`).then(async (response) => {
            if (response?.code == 200) {
                let data = response?.data?.productWithQuantity
                dispatch(getCartSuccess(data))
                let res = await handleTax(data)
                dispatch(getTaxData(res))
            }
            else {
                dispatch(getCartFailure(response.data))
            }
        }).catch((error) => {
            dispatch(getCartFailure(error))
            console.log(error, "error");
        })
    }

}

const calculateOrderTotal = (data) => {
    if (data?.length > 0) {
        const totalPricesTemp = data?.reduce((total, product) => {
            const subTotal = product.product.price * product.quantity;
            const totalPrice = total + subTotal;
            return totalPrice;
        }, 0);
        return totalPricesTemp
    }
    return 0
}

const handleTax = async (productData) => {
    if (productData?.length > 0) {
        const apiURl = 'Tax/get-all';
        return get(apiURl)
            .then((response) => {
                return calculateTax(response?.data, productData)
            })
            .catch((error) => {
                console.error('Error fetching tax data:', error);
            });
    }
    return 0
}

const calculateTax = (taxData, productData) => {
    if (taxData && productData?.length > 0) {
        const taxRate = taxData[0].taxPercent;
        const subTotal = calculateOrderTotal(productData)
        const taxAmount = (subTotal * taxRate) / 100;
        const totalPriceWithTax = subTotal + taxAmount;
        return {
            taxAmount,
            totalPriceWithTax
        }
    } else {
        return {
            taxAmount: 0,
            totalPriceWithTax: 0
        }
    }
}
