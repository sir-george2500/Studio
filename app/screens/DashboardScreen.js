import { StyleSheet, Text, View ,FlatList } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import NavigationHeader from '../components/NavigationHeader';
import TrackerBox from '../components/TrackerBox';
import colors from '../config/colors';

const data = [{
  id: '1',
  title: 'QuickStart',
  category: [
    {
      id: '1',
      iconName:'caretright',
      number: 0,
      title: 'PLAYS',
      m:false,
      showCustom:true
    }, 
    {
      id: '2',
      iconName:'heart',
      number: 0,
      title: 'Like',
      m:false,
      showCustom:true
    },
    {
      id: '3',
      iconName:'account',
      number: 0,
      title: 'followers',
      m:true,
      showCustom:true
    },

    {
      id: '4',
      iconName:'surround-sound',
      number: 0,
      title: 'listen',
      m:true,
      showCustom:false,
    },
    //<Ionicons name="md-headset-sharp" size={24} color="black" />
  ]
}]


function DashboardScreen() {
  return (
    <Screen  Header={<NavigationHeader ScreenName="Dashboard"/>}>
      <Text style={styles.QuickStart}>{data[0].title}</Text>
      <FlatList 
     data={data[0].category}
     renderItem={({item})  => <TrackerBox data={item}/> }
     horizontal
     />
    </Screen>
  )
}

export default DashboardScreen;
const styles = StyleSheet.create({
 QuickStart:{
  fontSize:20,
  color:colors.white,
  fontWeight:"bold",
  margin:5,
 }

})