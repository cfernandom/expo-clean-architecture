import { UserPreviewEntity } from "../entities/UserPreview.Entity";
import { GenericRepository } from "./Generic.Repository";
import { ResponseRepository } from "./Response.Repository";

export interface UserRepository extends GenericRepository<UserPreviewEntity> {}
