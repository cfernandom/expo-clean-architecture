import { StyleSheet, Text, View } from "react-native";
import CustomUserCardComponent from "./CustomUserCardComponent";
import { UserEntity } from "@/app/domain/entities/User.Entity";

export default function CustomUserListComponent(props: { users: UserEntity[] }) {
    return (
        <View style={{ width:"100%"}}>
            <Text>CustomUserListComponent</Text>
            {
                props.users.map((user, index) => (
                    <View style={{marginBottom: 10}} key={"_"+index}>
                    <CustomUserCardComponent key={index} userId={user.id} />
                    </View>
                ))
            }
        </View>
    )
}

