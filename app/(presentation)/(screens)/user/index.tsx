import { UserServices } from '@/app/applicationService/services/userServices'
import { GetUserUC } from '@/app/applicationService/useCases/GetUser.UC'
import { UserEntity } from '@/app/domain/entities/User.Entity'
import { UserApiDT } from '@/app/infraestructure/dataSources/UserApi.DT'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

const UserScreen:React.FC = () => {
    const [user, setUser] = useState<UserEntity | undefined>({email: {email:""}, id: "", name: ""})
    const getUserUC = new GetUserUC(new UserServices(new UserApiDT()))

    useEffect(() => {
        
        const fetchData = async () => {            
            const userData = await getUserUC.execute("1")
            if (userData.statusCode === "200") {
                setUser(userData.data);
            }
        };
    
        fetchData();
    }, [])

    return (
        <View>
            <Text>user: {user?.name}</Text>
            <Text>email: {user?.email.email}</Text>
            <Text>id: {user?.id}</Text>
        </View>
    )
}

export default UserScreen