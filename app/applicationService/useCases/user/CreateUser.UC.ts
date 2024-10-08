import { UserEntity } from "@/app/domain/entities/User.Entity"
import { ResponseRepository } from "@/app/domain/repositories/Response.Repository"
import { UserRepository } from "@/app/domain/repositories/User.Repository"

export class CreateUserUC {
    private userRepository: UserRepository

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository
    }

    async execute(body: UserEntity): Promise<ResponseRepository<UserEntity>> {
        return await this.userRepository.create(body)
    }
}
