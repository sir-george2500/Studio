import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function ListItemSeperator({bgColor,T,}) {
  return (
    <View style={[styles.separator,{top:T},{backgroundColor:bgColor}]} />
  )
}

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        backgroundColor:colors.light,
      },
})