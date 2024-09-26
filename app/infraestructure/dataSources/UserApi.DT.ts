import { UserEntity } from "@/app/domain/entities/User.Entity";

export class UserApiDT {
    data:UserEntity[] = [
        {
            email:{email: "cristhian@emial.com"},
            id: "3",
            name: "cristhian"
        },
        {
            email:{email: "fernandom@emial.com"},
            id: "1",
            name: "fernandom"
        },
        {
            email:{email: "moreno@emial.com"},
            id: "2",
            name: "moreno"
        }
    ]
    async fetchUsers(): Promise<UserEntity[]> {
        return this.data
    }
}