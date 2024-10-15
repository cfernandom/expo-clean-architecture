import * as LocalAuthentication from "expo-local-authentication";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";


export default function FingerPrintP() {

    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const [fingerprint, setFingerprint] = useState(false);

    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
            const enroll = await LocalAuthentication.isEnrolledAsync();
            if (enroll) {
                setFingerprint(true);
            }
        })();
    }, []);

    const handle = async () => {
        try {
            const biometricAuth = await LocalAuthentication.authenticateAsync({
                promptMessage: "Login with Biometrics",
                disableDeviceFallback: true,
                cancelLabel: "Cancel",
            });
            if (biometricAuth.success) {
                console.log('Ok')
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <View >
            <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                {isBiometricSupported && fingerprint ? (
                    <TouchableOpacity onPress={handle}>
                        <Text >Go to home</Text>
                    </TouchableOpacity>
                ) : (
                    <View>
                        <Text>fingerprint not supported/ allocated</Text>
                    </View>
                )}
            </View>
        </View>
    )
}