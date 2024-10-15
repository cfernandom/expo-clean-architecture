export class CreatePostUC {
    private userRepository: PostRepository

    constructor(userRepository: PostRepository){
        this.userRepository = userRepository
    }

    async execute(body: PostEntity): Promise<ResponseRepository<PostEntity>> {
        return await this.userRepository.create(body)
    }
}
