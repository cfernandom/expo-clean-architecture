import { UserPreviewEntity } from "@/app/domain/entities/User.Entity"
import { ResponseRepository } from "@/app/domain/repositories/Response.Repository"
import { UserRepository } from "@/app/domain/repositories/User.Repository"

export class GetUsersUC {
    private userRepository: UserRepository
    constructor(userRepository: UserRepository){
        this.userRepository = userRepository
    }

    async execute(): Promise<ResponseRepository<UserPreviewEntity[]>> {
        return await this.userRepository.getList()
    }
}