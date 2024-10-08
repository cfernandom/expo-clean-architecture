import { UserEntity as UserEntity } from "@/app/domain/entities/User.Entity";
import { ResponseRepository } from "@/app/domain/repositories/Response.Repository";
import { UserRepository } from "@/app/domain/repositories/User.Repository";
import { DummyApi } from "@/app/infraestructure/dataSources/DummyApi";
import { UserApiDT } from "@/app/infraestructure/dataSources/UserApi.DT";

export class UserServices implements UserRepository {
    private apiData: DummyApi<UserEntity>
    constructor(apiData: DummyApi<UserEntity>) {
        this.apiData = apiData
    }
    async getById(id: string): Promise<ResponseRepository<UserEntity>> {
        let user = await this.apiData.get(`user/${id}`)
        if (!user) {
            return {
                statusCode: "404",
                message: "User not found"
            }
        }
        return {
            statusCode: "200",
            message: "User found",
            data: user
        }
    }
    async getList(): Promise<ResponseRepository<UserEntity[]>> {
        return {
            statusCode: "200",
            message: "Users found",
            data: await this.apiData.getList("user")
        }
    }
    
    async create(body: UserEntity): Promise<ResponseRepository<UserEntity>> {
        return {
            statusCode: "200",
            message: "User created",
            data: await this.apiData.create("user/create", body)
        }
    }
    async update(id: string, body: UserEntity): Promise<ResponseRepository<UserEntity>> {
        return {
            statusCode: "200",
            message: "User updated",
            data: await this.apiData.update(id, body)
        }
    }

    async delete(id: string): Promise<ResponseRepository<string>> {
        return {
            statusCode: "200",
            message: "User deleted",
            data: await this.apiData.delete(id)
        }
    }
}