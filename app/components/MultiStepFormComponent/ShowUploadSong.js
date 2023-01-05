import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from '../AppText'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Progress from 'react-native-progress';

export default function ShowUploadSong({songName , progress}) {

  return (
    <View style={styles.container}>
     <View  style={styles.contentView}>
     <AppText style={styles.text} >{songName}</AppText>
     <View  style={styles.icon}>  
     <TouchableOpacity>
     <MaterialCommunityIcons
          name="trash-can"
          size={30}
          color={colors.danger}
        />
     </TouchableOpacity>
     </View>
     </View>
     {/* The the progress bar  */}
     <View  style={styles.barContainer}>
     <View style={{
    backgroundColor:colors.black,
    width:`${progress}%`,
    height:7,
   
    marginLeft:1,
    marginRight:30,
    paddingRight:10,
    borderRadius:10,
   }}>
     
     </View>
     </View>
     
    </View>
  )
}

const styles = StyleSheet.create({

    text:{
        color:colors.black,
    },
    container:{
      marginLeft:10,
      marginRight:10,
      borderRadius:2,
      backgroundColor:colors.primary,
      borderColor:colors.white,
    },
    contentView:{
      flexDirection:"row",
      justifyContent:"space-between"
    },
    icon:{
      marginTop:10,
    },
  
  
  

   barContainer:{
    margin:10,
   
   }

})