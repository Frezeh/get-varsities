import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        // width: width,
        height: height,
        backgroundColor: "gray",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 50,
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
    formButton: {
        margin: 20,
    },
    formInput: {
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    },
    btnEye: {
        position: "absolute",
        top: 10,
        right: 37,
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
        color: "#000000",
    },
    buttonWrapper: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
    },
    formCheckbox: {
        alignItems: "center",
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