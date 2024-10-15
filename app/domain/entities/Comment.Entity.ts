import { UserEntity } from "./User.Entity";

export interface CommentEntity {
    id: string;
    message: string;
    owner: UserEntity;
    post: string;
    publishData: string;
}