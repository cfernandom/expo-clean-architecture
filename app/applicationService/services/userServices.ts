import { UserPreviewEntity } from "@/app/domain/entities/User.Entity";
import { ResponseRepository } from "@/app/domain/repositories/Response.Repository";
import { UserRepository } from "@/app/domain/repositories/User.Repository";
import { DummyApi } from "@/app/infraestructure/dataSources/DummyApi";
import { UserApiDT } from "@/app/infraestructure/dataSources/UserApi.DT";

export class UserServices implements UserRepository {
    private apiData: DummyApi<UserPreviewEntity>
    constructor(apiData: DummyApi<UserPreviewEntity>) {
        this.apiData = apiData
    }
    async getById(id: string): Promise<ResponseRepository<UserPreviewEntity>> {
        let user = (await this.apiData.get(`users/${id}`))
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
    async getList(): Promise<ResponseRepository<UserPreviewEntity[]>> {
        return {
            statusCode: "200",
            message: "Users found",
            data: await this.apiData.getList("user")
        }
    }
    
    create(body: UserPreviewEntity): Promise<ResponseRepository<UserPreviewEntity>> {
        throw new Error("Method not implemented.");
    }
    update(id: string, body: UserPreviewEntity): Promise<ResponseRepository<UserPreviewEntity>> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<ResponseRepository<string>> {
        throw new Error("Method not implemented.");
    }
}