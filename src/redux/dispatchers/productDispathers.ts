export const reducerSetProducts = (products: any) => {
    return {
        type: "SET_PRODUCTS",
        payload: products
    }
}

export const reducerSetProduct = (product: any) => {
    return {
        type: "SET_PRODUCT",
        payload: product
    }
}

export const reducerToggleLoading = () => {
    return {
        type: "TOGGLE_LOADING"
    }
}