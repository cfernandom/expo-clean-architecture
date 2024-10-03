import axios from "axios"

import { DUMMY_API_URL, DUMMY_API_KEY } from "@env";

const axiosInstance = axios.create({
    baseURL: DUMMY_API_URL,
    timeout: 10000
});

axiosInstance.interceptors.request.use(
    async (config) =>  {
        config.headers.set({"app-id": DUMMY_API_KEY})
        return config
    }, (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance