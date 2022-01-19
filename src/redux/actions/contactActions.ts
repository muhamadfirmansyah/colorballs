import { Dispatch } from "react";
import { getContacts } from "../../services/contactService";
import { reduceSetContacts } from "../dispatchers/contactDispatchers";


export const actionGetContacts = (dispatch: Dispatch<any>) => {
    return new Promise((resolve, reject) => {
        getContacts().then((res: any) => {
            dispatch(reduceSetContacts(res.data))
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}