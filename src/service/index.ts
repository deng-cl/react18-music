import HRequest from "./request";
import { BASE_URL, TIME_OUT } from './request/config'

const http = new HRequest({ // 配置封装的当前 axios 实例的默认参数
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptor(config) {
            console.log("requestInterceptor");
            return config
        }
    }
})

export default http


