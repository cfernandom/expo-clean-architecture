import { UserEntity } from "../entities/User.Entity";
import { ResponseRepository } from "./Response.Repository";

export interface UserRepository {
    getUserById(id: string): Promise<ResponseRepository<UserEntity>>;
    getUsers(): Promise<ResponseRepository<UserEntity[]>>;
}
