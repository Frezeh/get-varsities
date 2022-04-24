import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        alignItems: 'center',
        justifyContent: 'center',
         borderTopLeftRadius: 40,
        borderTopRightRadius: 40
        // width: width,
        // height: height,
    },
    buttons: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeWrapper: {
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "roboto",
        color: "#f4f4f4",
        margin: 10,
        textAlign: "left",
        letterSpacing: 3,
    },
    welcomeSubText: {
        fontFamily: "roboto",
        letterSpacing: 3,
        color: "#f4f4f4",
        textAlign: "left",
        margin: 10,
    },
    buttonWrapper: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 30,
    },
    solid: {
        width: 250,
        backgroundColor: "#FD2E60",
        padding: 15,
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 24,
    },
    solidText: {
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 3,
        fontFamily: "roboto",
        color: "#666",
    },
    transparent: {
        width: 250,
        height: 50,
        padding: 15,
        justifyContent: "center",
        marginBottom: 20,
        borderWidth: 2,
        borderRadius: 24,
        borderColor: "#FD2E60",
        fontWeight: "bold",
        fontFamily: "roboto",
        letterSpacing: 3,
        backgroundColor: "transparent",
        color: "#fff"
    },
    textInput: {
        marginBottom: 20,
    },
    wrapper: {
        zIndex: 9,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
    },
    loadingView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    loadingText: {
        color: "#4682B4",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default styles;