import { combineReducers } from "@reduxjs/toolkit";

import productReducer from "./productReducer"
import contactReducer from "./contactReducer"
import measureReducer from "./measureReducer";

export default combineReducers({
    productReducer,
    contactReducer,
    measureReducer,
})