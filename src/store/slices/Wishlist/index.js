import { createSlice } from "@reduxjs/toolkit"
import { get } from "../../../api-services"
import { endPoints } from "../../../constants"

export const initialState = {
    loading: false,
    hasErrors: false,
    wishlistItems: [],
}

const wishlistSlice = createSlice({
    name: 'Wishlist',
    initialState,
    reducers: {
        getWishlist: state => {
            state.loading = true
        },
        getWishlistSuccess: (state, { payload }) => {
            state.wishlistItems = payload
            state.loading = false
            state.hasErrors = false
        },
        getWishlistFailure: (state, { payload }) => {
            state.loading = false
            state.hasErrors = payload
        },
    },
})

export const { getWishlist, getWishlistSuccess, getWishlistFailure } = wishlistSlice.actions

export default wishlistSlice.reducer


export function handleGetWishlist(id) {
    return async dispatch => {
        dispatch(getWishlist())
        get(`${endPoints.getWishlist}/${id}`).then(async (response) => {
            if (response?.code == 200) {
                let data = response?.data?.product
                dispatch(getWishlistSuccess(data))
            }
            else {
                dispatch(getWishlistFailure(response.data))
            }
        }).catch((error) => {
            dispatch(getWishlistFailure(error))
            console.log(error, "error");
        })
    }

}