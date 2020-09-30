import axios from 'axios'
import {
    Message
} from "element-ui";

const service = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 5000,
})

service.interceptors.response.use(response => {
        const res = response.data;
        if (res.code !== 200) {
            Message.error(res.data)
        } else {
            return response.data;
        }
    },
    error => {
        console.log('err' + error);
        Message({
            message: '请求出错',
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
)

export default service;