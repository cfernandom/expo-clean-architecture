import { ResponseRepository } from "./Response.Repository";

export interface GenericRepository<T> {
    getById(id: string): Promise<ResponseRepository<T>>;
    getList(): Promise<ResponseRepository<T[]>>;
    create(body: T): Promise<ResponseRepository<T>>;
    update(id: string, body: T): Promise<ResponseRepository<T>>;
    delete(id: string): Promise<ResponseRepository<string>>;
}
