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

export const Post = (path: string, data: any, host: string = API_URL) => {
    return new Promise((resolve, reject) => {
        axios.post(host + path, data).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}