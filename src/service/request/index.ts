import axios from "axios"
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios"
import type { HRequestInterceptors, HRequestConfig } from "./types" /* 类型扩展 */

class HRequest { // H: 个人昵称
    instance: AxiosInstance
    interceptors: Partial<HRequestInterceptors> | undefined /* Partial: 统一转换可选类型 */

    constructor(config: /* HRequestConfig: 对原来的 axios 中的 AxiosRequestConfig 接口进行扩展*/ HRequestConfig) {
        this.instance = axios.create(config) /* 每次 new HRquest 时，都是一个独立的 axios 实例供下面所要封装的请求方法使用 <业务需要可能要创建多个 instance 实例: 如当项目中需要使用多个请求 baseURL 时> */

        /* 实例拦截器 <对当前实例所有方法都会生效>: 调用自定义拦截器 Hooks : 创建 HRequest 实例或使用下面实例封装的方法时可自定义配置拦截器 hooks 来做对应的拦截操作 */
        this.interceptors = config.interceptors /* 获取 config 中拦截器参数 hooks */
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )

        /* 全局拦截器 <对所有 HRequest 实例中的所有方法都会生效>: 通过直接添加 this.instance.interceptors.request.use 里面对应的拦截方法，来配置每一个 HRequest 实例都有的拦截器 <人话: 直接在实例中写死的拦截器方法> */
        this.instance.interceptors.request.use(
            config => {
                return config
            },
        )
        this.instance.interceptors.response.use(
            config => {
                if (config.data?.returnCode === '-1001') { /* 处理服务器响应错误信息时: returnCode 属性需要根据对应服务器响应数据的格式决定 <如服务器返回响应信息的格式中状态码也可能时 status|code 等属性进行响应> */
                    console.log("处理对应的错误信息")
                }

                return config.data /* 响应拦截: 只返回服务器所响应的数据 */
            },
            err => { /* 请求失败响应拦截，处理全局请求失败的逻辑 */
                if (err.response?.status === 404) {
                    console.log("404错误~");
                }
                /* oether error handle */
            }
        )
    }

    request<R>(config: HRequestConfig<R>): Promise<R> {
        if (config?.interceptors?.requestInterceptor) {  /* 局部请求拦截器 */
            config = config.interceptors.requestInterceptor(config as InternalAxiosRequestConfig /* 通过类型断言进行类型范围延申，使其符合对应的拦截器类型 */)
        }

        return this.instance.request<any, R>(config).then(res => { /* 通过实例中的 instance/axios 实例，来进行对应请求的封装 */
            if (config?.interceptors?.responseInterceptor) {  /* 局部响应拦截器 */
                res = config.interceptors.responseInterceptor(res) /* 将最终的 res 断言成 R 类型 */
            }
            return res
        })
    }

    get<R>(config: HRequestConfig<R>): Promise<R> {
        return this.request<R>({ ...config, method: "GET" })
    }

    post<R>(config: HRequestConfig<R>): Promise<R> {
        return this.request<R>({ ...config, method: "POST" })
    }

    delete<R>(config: HRequestConfig<R>): Promise<R> {
        return this.request<R>({ ...config, method: "DELETE" })
    }

    patch<R>(config: HRequestConfig<R>): Promise<R> {
        return this.request<R>({ ...config, method: "PATCH" })
    }

    put<R>(config: HRequestConfig<R>): Promise<R> {
        return this.request<R>({ ...config, method: "PUT" })
    }
}

export default HRequest

