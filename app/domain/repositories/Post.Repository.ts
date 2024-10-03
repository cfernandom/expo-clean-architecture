import { PostEntity } from "../entities/Post.Entity";
import { GenericRepository } from "./Generic.Repository";

export interface PostRepository extends GenericRepository<PostEntity> {}
