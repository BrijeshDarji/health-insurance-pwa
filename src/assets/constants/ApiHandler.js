/**
 *  @description Api handler to intercept request and response.
 */

import axios from "axios"

import { promisifyError } from "../../helpers/ApiHelper"

const BASE_URL = `${process.env.REACT_APP_API_URL}`

export const server = axios.create({
    baseURL: `${BASE_URL}`,
    timeout: 600000,
})

server.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem("token")
        if (token) config.headers.Authorization = `Bearer ${token}`
        return config
    },
    (error) => {
        return promisifyError(error)
    }
)

server.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return promisifyError(error)
    }
)