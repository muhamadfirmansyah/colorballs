const initialState = {
    products: []
}

const productReducer = (state: any = initialState, action: { type: string, payload: string | {} | any }) => {
    switch (action.type) {
        case "SET_PRODUCTS": {
            return {
                ...state,
                products: action.payload
            }
        }
        default:
            return state
    }
}

export default productReducer