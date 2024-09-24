import { UserEntity } from "@/app/domain/entities/User.Entity";
import { ResponseRepository } from "@/app/domain/repositories/Response.Repository";
import { UserRepository } from "@/app/domain/repositories/User.Repository";
import { UserApiDT } from "@/app/infraestructure/dataSources/UserApi.DT";

export class UserServices implements UserRepository {
    private apiData: UserApiDT
    constructor(apiData: UserApiDT){
        this.apiData = apiData
    }
    async getUserById(id: string): Promise<ResponseRepository<UserEntity>> {
        let user = (await this.apiData.fetchUsers()).find(u => u.id === id)
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
    async getUsers(): Promise<ResponseRepository<UserEntity[]>> {

        return {
            statusCode: "200",
            message: "Users found",
            data: await this.apiData.fetchUsers()
        }
    }
}