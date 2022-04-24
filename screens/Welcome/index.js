import * as React from "react";
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Text,
    Image,
    ImageBackground,
} from "react-native";
import styles from './style';
import Background from '../../assets/images/background1.png'

export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={Background}>
                <View style={styles.welcomeWrapper}>
                    <Text style={styles.welcomeText}>Welcome to Get Varsity</Text>
                    <Text style={styles.welcomeSubText}>
                    Get all higher instituion in a country.
                    Enter a country in lowercase and search for higher instituion
                    </Text>
                    <View style={styles.buttonWrapper}>
                        <TouchableHighlight
                            onPress={() => navigation.navigate("Login")}
                            style={styles.solid}
                        >
                            <Text style={styles.solidText}>Login</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={() => navigation.navigate("Register")}
                            style={styles.transparent}
                        >
                            <Text style={styles.transparentText}>Create Account</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}