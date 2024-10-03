import axiosInstance from "../http/AxiosInstance";
import {DUMMY_API_KEY, DUMMY_API_URL} from "@env"

export class DummyApi<T> {
    
    async get(path: string): Promise<T> {
        try {
            const response = await axiosInstance.get(path);
            return response.data;
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            throw new Error("Error al realizar la solicitud.");
        }
    }

    async getList(path: string): Promise<T[]> {
        try {
            const response = await axiosInstance.get(path);
            return response.data.data;
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            throw new Error("Error al realizar la solicitud.");
        }
    }
}
