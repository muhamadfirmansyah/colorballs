import axios from 'axios'

import { API_URL } from "./constants";

export const Get = (path: string, host: string = API_URL) => {
    return new Promise((resolve, reject) => {
        axios.get(host + path).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}