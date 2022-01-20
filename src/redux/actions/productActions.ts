import { Dispatch } from "react";
import { getProduct, getProducts, postProduct } from "../../services/productService";
import { reducerSetProduct, reducerSetProducts, reducerToggleLoading } from '../dispatchers/productDispathers'

export const actionGetProducts = (dispatch: Dispatch<any>) => {
    return new Promise(((resolve, reject) => {
        dispatch(reducerToggleLoading())
        getProducts().then((res: any) => {
            dispatch(reducerToggleLoading())
            dispatch(reducerSetProducts(res.data))
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    }))
}

export const actionPostProduct = (data: any, dispatch: Dispatch<any>) => {
    return new Promise((resolve, reject) => {
        postProduct(data).then((res: any) => {
            actionGetProducts(dispatch)
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const actionGetProduct = (id: string, dispatch: Dispatch<any>) => {
    dispatch(reducerToggleLoading())
    return new Promise((resolve, reject) => {
        getProduct(id).then((res: any) => {
            dispatch(reducerToggleLoading())
            dispatch(reducerSetProduct(res.data))
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}