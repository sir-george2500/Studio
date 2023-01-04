import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppTextInput from './app/components/AppTextInput';
import AppForm from './app/components/forms/AppForm';
import AppFormField from './app/components/forms/AppFormField';
import AppFormImagePicker from './app/components/forms/AppFormImagePicker';
import ImageInput from './app/components/ImageInput';
import NavigationHeader from './app/components/NavigationHeader';
import AppPicker from './app/components/Picker';
import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppNavigation from './navigation/AppNavigation';
import AuthNavigator from './navigation/AuthNavigation';
import AuthRoute from './navigation/Provider/AuthRoute';
import Provider from './navigation/Provider/Provider';
import * as Yup from 'yup'
import SubmitButton from './app/components/forms/SubmitButton';
import MultFormButton from './app/components/MultiStepFormComponent/MultiFormButton';

export default function App() {
 
  return (
    <Provider/>
   
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
