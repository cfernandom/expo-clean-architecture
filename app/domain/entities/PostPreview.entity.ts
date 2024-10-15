import { UserEntity } from "./User.Entity";

export interface PostPreviewEntity {
    id: string;
    text: string;
    image: string;
    likes: number;
    tags: string[];
    publishDate: string;
    owner: UserEntity;
}
