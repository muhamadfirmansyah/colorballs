import { createStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = createStore(
    reducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export default store