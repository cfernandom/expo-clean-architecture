import { useLocalSearchParams } from "expo-router"
import { Fragment } from "react"
import { Text } from "react-native"
import UserCard from "../../components/UserCard.Component"

const DetailsScreen = () => {
    const { id, q } = useLocalSearchParams()
    return (
        <Fragment>
            <UserCard userId={id.toString()} />
        </Fragment>
    )
}

export default DetailsScreen