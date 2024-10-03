import axios, { AxiosInstance } from "axios";
import {DUMMY_API_KEY, DUMMY_API_URL} from "@env"

export class DummyApi<T> {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: DUMMY_API_URL,
            headers: {
                "app-id": DUMMY_API_KEY,
            },
        });
    }

    async get(path: string): Promise<T> {
        try {
            const response = await this.api.get(path);
            return response.data.data;
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            throw new Error("Error al realizar la solicitud.");
        }
    }

    async getList(path: string): Promise<T[]> {
        try {
            const response = await this.api.get(path);
            return response.data.data;
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            throw new Error("Error al realizar la solicitud.");
        }
    }
}
