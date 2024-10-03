import { UserEntity } from "../entities/User.Entity";
import { GenericRepository } from "./Generic.Repository";
import { ResponseRepository } from "./Response.Repository";

export interface UserRepository extends GenericRepository<UserEntity> {}
