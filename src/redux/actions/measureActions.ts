import { Dispatch } from "react"
import { getMeasures, postMeasures } from "../../services/measureService"
import { setMeasures, toggleLoading } from "../dispatchers/measureDispatchers"

export const actionGetMeasures = (dispatch: Dispatch<any>) => {
    return new Promise((resolve, reject) => {
        dispatch(toggleLoading())
        getMeasures().then((res: any) => {
            dispatch(setMeasures(res.data))
            dispatch(toggleLoading())
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export const actionPostMeasure = (payload: any, dispatch: Dispatch<any>) => {
    return new Promise((resolve, reject) => {
        dispatch(toggleLoading())
        postMeasures(payload).then((res:any) => {
            actionGetMeasures(dispatch)
            dispatch(toggleLoading())
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}