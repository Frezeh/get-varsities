import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    // flexDirection: "column",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  buttons: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeWrapper: {
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    width: 100,
    height: 100,
    maxWidth: 100,
    resizeMode: "contain",
  },
  background: {
    width: width,
    height: height,
    // maxWidth: 100,
    resizeMode: "cover",
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f4f4f4",
    margin: 20,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  welcomeSubText: {
    letterSpacing: 3,
    color: "#f4f4f4",
    textAlign: "center",
    textTransform: "uppercase",
  },
  buttonWrapper: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
  },
  solid: {
    width: 250,
    backgroundColor: "#f3f8ff",
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
    color: "#666",
  },
  transparent: {
    width: 250,
    backgroundColor: "transparent",
    padding: 15,
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#f3f8ff"
  },
  transparentText: {
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 3,
    color: "#f3f8ff",
  },
});

export default styles;