import { UserPreviewEntity } from "@/app/domain/entities/User.Entity";

export class UserApiDT {
    data:UserPreviewEntity[] = [
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
    async fetchUsers(): Promise<UserPreviewEntity[]> {
        return this.data
    }
}