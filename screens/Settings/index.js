import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthenticationContext } from "../../App";

const { height } = Dimensions.get('window');

export default function Settings() {
    const { authenticated, setAuthenticated } = useContext(AuthenticationContext);

    const handleLogout = () => {
        setAuthenticated(false);
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: "cursive", fontSize: 30 }}>
                This is the Settings Page
            </Text>
            <TouchableOpacity
                onPress={handleLogout}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: height
    },
    button: {
        width: 250,
        backgroundColor: "#FD2E60",
        padding: 15,
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 24,
    },
    buttonText: {
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 3,
        fontFamily: "roboto",
        color: "#666",
    }
});