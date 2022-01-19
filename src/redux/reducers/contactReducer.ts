const initialValue = {
    contacts: []
}

const contactReducer = (state = initialValue, action: any) => {
    switch(action.type) {
        case "SET_CONTACTS": {
            return {
                ...state,
                contacts: action.payload
            }
        }
        default:
            return state
    }
}

export default contactReducer