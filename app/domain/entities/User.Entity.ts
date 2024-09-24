import { EmailOV } from "../objectValues/email.ov";

export interface UserEntity {
    id: string;
    name: string;
    email: EmailOV;
}