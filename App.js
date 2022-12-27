import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationHeader from './app/components/NavigationHeader';
import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppNavigation from './navigation/AppNavigation';
import AuthNavigator from './navigation/AuthNavigation';
import AuthRoute from './navigation/Provider/AuthRoute';
import Provider from './navigation/Provider/Provider';


export default function App() {
  return (
   <Provider />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
