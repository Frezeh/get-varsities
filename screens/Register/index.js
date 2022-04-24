import * as React from "react";
import {
    View,
    TouchableHighlight,
    Text,
    TextInput,
    Image,
} from "react-native";
import { Alert, SignUpPrompt } from "../../components/Alert";
import styles from './style';
import Google from '../../assets/images/google.png'
import Meta from '../../assets/images/meta.png'
// import Header from '../../components/Header';

export default function Welcome() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmpassword, setconfirmPassword] = React.useState("");
    const [showPass, setShowPass] = React.useState(true);
    const [signUpPromptVisible, setSignUpPromptVisible] = React.useState(false);
    const [alertVisible, setAlertVisible] = React.useState(false);

    const handleSignup = () => {
        setSignUpPromptVisible(true);
        setTimeout(() => {
            setSignUpPromptVisible(false);
            alert('Sign Up Completed');
        }, 2000);
    };

    const handleGoogleLogin = () => {
    };

    const handleMetaLogin = () => {
    };

    const handleAlert = () => {
        setAlertVisible(true);
    };

    const handleAlertConfirm = () => {
        setAlertVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.welcomeWrapper}>
                <Text style={styles.welcomeText}>Create an account</Text>
                <Text style={styles.welcomeSubText}>
                    Fill the details and create an account.
                </Text>
                <View style={styles.buttonWrapper}>
                    <View style={styles.textInput}>
                        <TextInput
                            style={styles.transparent}
                            type="email"
                            placeholder="Username/Email ID"
                            placeholderTextColor="#f4f4f4"
                            onChangeText={(username) => setUsername(username)}
                            value={username}
                        />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput
                            style={styles.transparent}
                            type="password"
                            placeholder="Password"
                            placeholderTextColor="#f4f4f4"
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                            secureTextEntry={showPass}
                        />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput
                            style={styles.transparent}
                            type="password"
                            placeholder="Confirm Password"
                            placeholderTextColor="#f4f4f4"
                            onChangeText={(confirmpassword) =>
                                setconfirmPassword(confirmpassword)
                            }
                            value={confirmpassword}
                            secureTextEntry={showPass}
                        />
                    </View>
                    <TouchableHighlight
                        onPress={
                            password !== confirmpassword ? handleAlert : handleSignup
                        }
                        style={styles.solid}
                    >
                        <Text style={styles.solidText}>Sign Up</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: "white" }}>or sign in with</Text>
                </View>
                <View
                    style={{ flexDirection: "row", justifyContent: "space-around" }}
                >
                    <TouchableHighlight
                        onPress={handleMetaLogin}
                        style={{ marginTop: 20 }}
                    >
                        <Image
                            source={Meta}
                            style={{ width: 30, height: 30 }}
                        ></Image>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={handleGoogleLogin}>
                        <Image
                            source={Google}
                            style={{ width: 75, height: 70 }}
                        ></Image>
                    </TouchableHighlight>
                </View>

                <SignUpPrompt
                    message={"😀 Signup in Progress. . ."}
                    visible={signUpPromptVisible}
                />

                <Alert
                    title={"❌ Signup Error"}
                    message={"Wrong password combination"}
                    visible={alertVisible}
                    onConfirm={handleAlertConfirm}
                />
            </View>
        </View>
    );
}