import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';

 function TrackerBox({data}) {

  return (
    <View style={styles.container}>     
        <Icon  name={data.iconName} size={26}  iconColor={colors.brandColor} marginTop={15} m={data.m}/>       
      <Text style={styles.text}>{data.number}</Text>
      <Text style={styles.textFunction}>{data.title}</Text>
    </View>
  )
}

export default TrackerBox;
const styles = StyleSheet.create({
 container:{
    width:100,
    height:100,
    borderRadius:10,
    margin:5,
    backgroundColor:colors.nearDark,
    alignItems:"center",
 },
 text:{
  fontSize:20,
  color:colors.white,
  fontWeight:"bold",
 },

 textFunction:{
  color:colors.brandColor
 }
})