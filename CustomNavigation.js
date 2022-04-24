import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./screens/Welcome/index";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Settings from "./screens/Settings";
import Dashboard from "./screens/Dashboard";

const Stack = createStackNavigator();

const screenOptionStyle = {
  gestureEnabled: true,
  headerStyle: {
    height: 139,
    backgroundColor: '#FD2E60', 
    borderBottomLeftRadius: 40, 
    borderBottomRightRadius: 40
  },
  headerTitleStyle: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 30
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerMode: 'float',
};

const AuthenticationScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
}

export { AuthenticationScreenNavigator };

const DashboardScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
      />
    </Stack.Navigator>
  );
}

export { DashboardScreenNavigator };

const SettingsScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Settings"
        component={Settings}
      />
    </Stack.Navigator>
  );
}

export { SettingsScreenNavigator };