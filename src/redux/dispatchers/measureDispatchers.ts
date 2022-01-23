export const setMeasures = (measures: any) => {
    return {
        type: "SET_MEASURES",
        payload: measures
    }
}

export const toggleLoading = () => {
    return {
        type: "TOGGLE_LOADING"
    }
}