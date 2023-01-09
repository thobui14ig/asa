import axios, { AxiosInstance } from "axios";
import ApiConstant from "./apiConstant";

class Http {
    instance: AxiosInstance
    accessToken = localStorage.getItem('accessToken')
    refreshToken = localStorage.getItem('refreshToken')

    constructor() {
        this.instance = axios.create({
            baseURL: ApiConstant.BASE_API_URL,
            timeout: 10000,
            headers: {
                'x_authorization': this.accessToken,
                'Content-Type': 'application/json'
            },
            data: {
                refreshToken: this.refreshToken
            },


        })
    }
}

const http = new Http().instance
export default http