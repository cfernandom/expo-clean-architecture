
import { UserPreviewEntity } from "@/app/domain/entities/User.Entity";
import { ResponseRepository } from "@/app/domain/repositories/Response.Repository";
import { UserRepository } from "@/app/domain/repositories/User.Repository";
export class GetUserUC {
    private userRepository: UserRepository
    constructor(userRepository: UserRepository){
        this.userRepository = userRepository
    }

    async execute(id:string): Promise<ResponseRepository<UserPreviewEntity>> {
        return await this.userRepository.getById(id)
    }
}