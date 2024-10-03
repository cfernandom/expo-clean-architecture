import { EmailOV } from "../objectValues/email.ov";
import { LocationOV } from "../objectValues/location.ov";

export interface UserEntity {
    id: string;
    firstName: string;
    lastName: string;
    title: string;
    picture: string;
    email: string;
    gender: string;
    dateOfBirth: string;
    registerDate: string;
    phone: string;
    location: LocationOV;
    //email: EmailOV;
}