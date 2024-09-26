import { useLocalSearchParams } from "expo-router"
import { Text } from "react-native"

const DetailsScreen = () => {
    const { id, q } = useLocalSearchParams()
    return (
        <Text>
            el id es {id} y la q es {q}
        </Text>
    )
}

export default DetailsScreen