import { UserServices } from '@/app/applicationService/services/userServices'
import { GetUserUC } from '@/app/applicationService/useCases/GetUser.UC'
import { UserEntity } from '@/app/domain/entities/User.Entity'
import { UserApiDT } from '@/app/infraestructure/dataSources/UserApi.DT'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import UserListComponent from '../../components/UserList.Component'
import { GetUsersUC } from '@/app/applicationService/useCases/GetUsers.UC'
import { Divider, List } from '@mui/material'

const UserScreen: React.FC = () => {
    const [user, setUser] = useState<UserEntity | undefined>({ email: { email: "" }, id: "", name: "" })
    const [users, setUsers] = useState<UserEntity[]>([])
    const getUserUC = new GetUserUC(new UserServices(new UserApiDT()))
    const getAllUserUC = new GetUsersUC(new UserServices(new UserApiDT()))


    useEffect(() => {

        const fetchData = async () => {
            const userData = await getUserUC.execute("1")
            if (userData.statusCode === "200") {
                setUser(userData.data);
            }
        };

        const fetchUsers = async () => {
            const userData = await getAllUserUC.execute()
            if (userData.statusCode === "200" && userData.data) {
                setUsers(userData.data);
                console.log(userData.data)
            }
        }

        fetchData();
        fetchUsers();

    }, [])

    return (
        <View>
            <UserListComponent users={users} />
        </View>
    )
}

export default UserScreen