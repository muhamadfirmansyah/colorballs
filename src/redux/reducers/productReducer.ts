const initialState = {
    products: [],
    product: {},
    isLoading: false
}

const productReducer = (state: any = initialState, action: { type: string, payload: string | {} | any }) => {
    switch (action.type) {
        case "SET_PRODUCTS": {
            return {
                ...state,
                products: action.payload
            }
        }
        case "SET_PRODUCT": {
            return {
                ...state,
                product: action.payload
            }
        }
        case "TOGGLE_LOADING": {
            return {
                ...state,
                isLoading: !state.isLoading
            }
        }
        default:
            return state
    }
}

export default productReducer