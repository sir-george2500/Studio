import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from '../app/screens/LoginScreen';
import RegisterScreen from '../app/screens/RegisterScreen';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import routes from './routes'

const Stack = createStackNavigator();
const AuthNavigator = () => (
    <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={routes.LOGIN} 
    component={LoginScreen} />
    <Stack.Screen 
    name={routes.REGISTER} 
    component={RegisterScreen} 
    />
  </Stack.Navigator>
);


const styles = StyleSheet.create({
  container: {}
});

export default AuthNavigator;