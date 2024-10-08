import axiosInstance from "../http/AxiosInstance";

export class DummyApi<T> {
    async get(path: string): Promise<T> {
        const response = await axiosInstance.get(path);
        return response.data;
    }

    async getList(path: string): Promise<T[]> {
        const response = await axiosInstance.get(path);
        return response.data.data;
    }

    async create(path: string, body: T): Promise<T> {
        const response = await axiosInstance.post(path);
        return response.data;
    }

    async delete(path: string): Promise<string> {
        const response = await axiosInstance.delete(path);
        return response.data;
    }

    async update(path: string, body: T): Promise<T> {
        const response = await axiosInstance.put(path, body);
        return response.data;
    }
}
