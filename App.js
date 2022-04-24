import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DashboardScreenNavigator, SettingsScreenNavigator, AuthenticationScreenNavigator } from './CustomNavigation'

const Tab = createBottomTabNavigator();

export const AuthenticationContext = createContext(null);

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <AuthenticationContext.Provider value={{authenticated, setAuthenticated}}>
      <NavigationContainer>
        {!authenticated ? (
          <>
            <AuthenticationScreenNavigator />
          </>
        ) : (
          <>
            <Tab.Navigator
              tabBarOptions={{
                labelStyle: { fontSize: 18 },
                activeTintColor: 'red',
                inactiveTintColor: 'black'
              }}
            >
              <Tab.Screen
                name="Dashboard"
                component={DashboardScreenNavigator}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsScreenNavigator}
              />
            </Tab.Navigator>
          </>
        )}
      </NavigationContainer>
    </AuthenticationContext.Provider >
  );
};

export default App;
