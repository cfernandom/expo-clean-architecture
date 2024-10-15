import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import CommentsForm from "../../components/forms/CommentsForm";
import CameraP from "../../components/peripherals/Camera.p";
import LocationP from "../../components/peripherals/Location.p";
import FingerPrintP from "../../components/peripherals/FingerPrint.p";

const LandingScreen: FC = () => {
    const handleSubmitCommentForm = (values: any) => {
        alert("Valores de Formulario recibido")
    }
    return (
        <View style={{ margin: "auto", alignItems: "center", width: "100%" }}>
            <View style={[stylesLanding.container, stylesLanding.content_flex]}>
                <Text>Landing Screen</Text>
                <View style={stylesLanding.view1}>
                    <Text>view 1</Text>
                </View>
                <View>
                    <Text>view 2</Text>
                </View>
                <View>
                    <Text>view 3</Text>
                </View>
            </View>
            <View style={[stylesLanding.container]}>
                Formulario de Post
                <CommentsForm handleSubmit={handleSubmitCommentForm} />
                <CameraP />
                <LocationP />
                <FingerPrintP />
            </View>
        </View>
    )
}

export default LandingScreen

const stylesLanding = StyleSheet.create({
    container: {
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#57F287",
    },
    content_flex: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
    },
    view1: {
        width: "90%",
        height: "50%",
        backgroundColor: "red",
    },

    view2: {
        width: "90%",
        height: "50%",
        backgroundColor: "blue",
    }

})