/**
 *  @description This file contains API helper methods. 
 */

export const errorHandler = (err) => {
    const statusCode = err?.response?.status

    if (statusCode === 401 || err === "No current user") {
        localStorage.removeItem("token")
    }
    return {
        success: false,
        statusCode,
        message:
            err?.response?.data?.error ||
            "An error occurred while performing this action",
    }
}

export const promisifyError = (err) => {
    return new Promise((resolve, reject) => {
        reject(errorHandler(err))
    })
}
