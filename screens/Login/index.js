import React, { useState, useContext } from "react";
import {
  View,
  ScrollView,
  TouchableHighlight,
  Text,
  SafeAreaView,
  TextInput
} from "react-native";
import { Alert, SignUpPrompt } from "../../components/Alert";
import styles from './style';
import { AuthenticationContext } from "../../App";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const { authenticated, setAuthenticated } = useContext(AuthenticationContext);
  const [signUpPromptVisible, setSignUpPromptVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleAlert = () => {
    setAlertVisible(true);
  };

  const handleAlertConfirm = () => {
    setAlertVisible(false);
  };

  const handleLogin = () => {
    setSignUpPromptVisible(true);
    setAuthenticated(true);
  };

  return (
    <SafeAreaView
      style={styles.safeAreaView}
    >
      <ScrollView>
        <View style={styles.container}>
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
          <View style={styles.buttonWrapper}>
            <TouchableHighlight onPress={username === "" || password === "" ? handleAlert : handleLogin} style={styles.solid}>
              <Text style={styles.solidText}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
        <SignUpPrompt
          message={"😀 Login in Progress. . ."}
          visible={signUpPromptVisible}
        />

        <Alert
          title={"❌ Login Error"}
          message={"Username or password cannot be empty"}
          visible={alertVisible}
          onConfirm={handleAlertConfirm}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
