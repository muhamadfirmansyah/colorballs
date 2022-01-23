const initialState = {
    measures: [],
    isLoading: false
}

const measureReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_MEASURES": {
            return {
                ...state,
                measures: action.payload
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

export default measureReducer