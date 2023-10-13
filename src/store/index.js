import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import Cart from "./slices/Cart"
import Wishlist from "./slices/Wishlist"
import thunk from "redux-thunk";

const reducer = combineReducers({
    Cart,
    Wishlist
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;