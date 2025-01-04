import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './features/product'
// export default can be imported with any name.
import cartReducer from './features/cart';
import categoryReducer from './features/category';
import commonReducer from './features/common';
import userReducer from './features/user';

// combineReducers: combines multiple reducer functions into a single root reducer
const rootReducer = combineReducers({
    productState: productReducer,
    cartState: cartReducer,
    categoryState: categoryReducer,
    commonState:commonReducer,
    userState:userReducer,
})
//  configuring store which we will export.
const store = configureStore({
    reducer : rootReducer
})

export default store;