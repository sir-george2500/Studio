import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import NavigationHeader from '../components/NavigationHeader'
import SearchInput from '../components/SearchInput'


export default function ShowUploadScreen() {
  return (
  <Screen  Header={<NavigationHeader ScreenName="Uploads"/>}>
    <View style={styles.containerSearch}>
    <SearchInput br={5} icon="magnify"/>
    </View>
  </Screen>
  )
}

const styles = StyleSheet.create({
  containerSearch:{
    marginLeft:10,
    marginRight:10,
  }
})