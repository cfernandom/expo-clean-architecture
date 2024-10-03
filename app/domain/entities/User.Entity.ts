import { LocationOV } from "../objectValues/location.ov";

export interface UserEntity {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    registerDate: string;
    phone: string;
    picture: string;
    location: LocationOV;
}
