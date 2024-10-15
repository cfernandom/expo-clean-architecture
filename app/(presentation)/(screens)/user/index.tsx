import { DummyApi } from '@/app/infraestructure/dataSources/DummyApi'
import { GetUsersUC } from '@/app/applicationService/useCases/user/GetUsers.UC'
import { GetUserUC } from '@/app/applicationService/useCases/user/GetUser.UC'
import { View, ScrollView, Text } from 'react-native'
import { UserEntity } from '@/app/domain/entities/User.Entity'
import { UserServices } from '@/app/applicationService/services/userServices'
import React, { useEffect, useState } from 'react'
import CustomUserListComponent from '../../components/CustomUserList.Component'


const UserScreen: React.FC = () => {
    const [user, setUser] = useState<UserEntity | undefined>()
    const [users, setUsers] = useState<UserEntity[]>([])
    const getUserUC = new GetUserUC(new UserServices(new DummyApi()))
    const getAllUserUC = new GetUsersUC(new UserServices(new DummyApi()))


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
            }
        }

        //fetchData();
        fetchUsers();

    }, [])

    return (
        <ScrollView>
            <CustomUserListComponent users={users} />
        </ScrollView>
    )
}

export default UserScreen
