import { Dispatch } from "react";
import { getProducts } from "../../services/productService";
import { reducerSetProducts } from '../dispatchers/productDispathers'

export const actionGetProducts = (dispatch: Dispatch<any>) => {
    return new Promise(((resolve, reject) => {
        getProducts().then((res: any) => {
            dispatch(reducerSetProducts(res.data))
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    }))
}