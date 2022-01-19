import { combineReducers } from "@reduxjs/toolkit";

import productReducer from "./productReducer"
import contactReducer from "./contactReducer"

export default combineReducers({
    productReducer,
    contactReducer,
})