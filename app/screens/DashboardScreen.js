import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import NavigationHeader from '../components/NavigationHeader';

function DashboardScreen() {
  return (
    <Screen  Header={<NavigationHeader ScreenName="Dashboard"/>}>
    
    </Screen>
  )
}

export default DashboardScreen;
const styles = StyleSheet.create({


})