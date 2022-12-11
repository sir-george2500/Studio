import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import NavigationHeader from '../components/NavigationHeader';

 function Statistics() {
  return (
    <Screen  Header={<NavigationHeader ScreenName="Statistics"/>}>
    
  </Screen>
  )
}

export default Statistics;
const styles = StyleSheet.create({})