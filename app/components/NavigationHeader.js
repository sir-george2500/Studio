import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { Ionicons } from '@expo/vector-icons';
import Icon from './Icon';

export default function NavigationHeader({ScreenName}) {
  return (
    <View style={styles.container}>
  <View style={styles.left}>
    <Image 
    source={require('../assets/symbol.png')} 
    style={styles.imag}
    />
    <Text style={styles.mainText}>{ScreenName}</Text>
 </View>
   <View  style={styles.right}>
    <View  style={styles.notificationContainer}>
   <TouchableOpacity>
   <Ionicons name="notifications" style={styles.notification} size={24} color="black" />
   </TouchableOpacity>
    </View>
    <View  style={styles.profileContainer}>
    <Icon name="account"  size={34} iconColor={colors.white}/>
    </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.light,
        height:65,  
        alignItems: 'center',    
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
    right:{
        marginRight:20,
        flexDirection:"row"
    },
    left:{
        marginLeft:10,
        flexDirection:"row"
    },
    imag:{
        width :24,
        height:24,
        resizeMode:"contain"
    },
   mainText:{
    marginTop:-2,
    fontSize:20,
    fontWeight:"bold"
   },
   notificationContainer:{
    marginRight:14,
    marginTop:4,
   }
})