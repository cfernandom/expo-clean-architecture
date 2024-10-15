import { UserServices } from "@/app/applicationService/services/userServices";
import { GetUserUC } from "@/app/applicationService/useCases/user/GetUser.UC";
import { UserEntity } from "@/app/domain/entities/User.Entity";
import { DummyApi } from "@/app/infraestructure/dataSources/DummyApi";
import moment from "moment";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CustomUserCardComponent(props: { userId: string }) {
    const [user, setUser] = useState<UserEntity>()
    
    const getUserUC = new GetUserUC(new UserServices(new DummyApi()))

    useEffect(() => {

        const fetchData = async () => {
            const userData = await getUserUC.execute(props.userId)

            if (userData.statusCode === "200") {
                setUser(userData.data)
            }
        }

        fetchData()
    }, [])

    return (
        <View style={[styles.container, styles.shadowCard]}>
            <Image source={{ uri: user?.picture }} style={styles.img}/>
            <View style={styles.info}>
                <View style={styles.head}>
                    <Text style={styles.title}>{user?.title}</Text>
                    <Text style={styles.name}>{user?.firstName}</Text>
                    <Text style={styles.name}>{user?.lastName}</Text>
                </View>
                <View>
                    <Text style={styles.date}>{moment(user?.registerDate).format("MMM Do YY")}</Text>
                    <Text style={styles.highlight}>{user?.email}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#f9f9f9",
        width: "80%",
        cursor: "pointer",
        margin: "auto",
    
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    head: {
        flexDirection: "row",
        gap: 4
    },
    info: {
        flexDirection: "column",
        gap: 10
    },
    shadowCard: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 20,
    },
    name: {
        fontWeight: "bold",
        color: "#333"
    },
    title: {
        fontSize: 12,
        color: "#888"
    },
    highlight: {
        color: "#f94d6a"
    },
    date: {
        color: "#888"
    }
})