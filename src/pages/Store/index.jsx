

import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/Cart-slice"

const Store = configureStore({
    reducer: {
        Cart: cartReducer
    }
})

export default Store;