import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import NavigationHeader from '../components/NavigationHeader'
import colors from '../config/colors'
import { FontAwesome5 ,Ionicons ,FontAwesome } from '@expo/vector-icons'
import Icon from '../components/Icon'


export default function UploadScreen() {
  return (
    <Screen  Header={<NavigationHeader ScreenName="Upload Songs/Album"/>}>
      <View style={styles.container}>
     <Text style={styles.mainText}>Please Select Your Upload Type</Text>
     <View style={styles.list}>
     <TouchableOpacity>
     <View style={[styles.song,{justifyContent:"center"}]}>
      <View style={styles.fontIcon}>
     <Icon name="music" size={42} iconColor={colors.brandColor}  />
     <Text style={styles.uploadSong}>Song</Text>
      </View>
     </View>
     </TouchableOpacity>
     {/* another Button start here */}
     <TouchableOpacity>
     <View style={styles.song}>
      <View style={styles.fontIcon}>
      <Icon name="music-box-multiple" size={42} iconColor={colors.brandColor}/>
      <Text style={styles.uploadSong}>Album/EP</Text>
      </View>
     </View>
     </TouchableOpacity>
     {/* The third button */}
     <TouchableOpacity>
     <View style={styles.song}>
      <View style={styles.fontIcon}>
        <Icon name="surround-sound" size={42} iconColor={colors.brandColor} />
        <Text style={styles.uploadSong}>Non-Musical</Text>
      </View>
     </View>
     </TouchableOpacity>
     </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container:{
   alignItems:"center"
  },
  mainText:{
    color:colors.light,
    alignItems:"center",
    fontSize:23,
    fontWeight:"bold"
  },
  list:{
    marginTop:60,
  }
  ,
  song:{
  marginTop:15,
  width:330,
  height:70,
  borderRadius:10,
  backgroundColor:colors.nearDark,
  },
  fontIcon:{
    padding:20,
    flexDirection:"row"
  },
  uploadSong:{
   color:colors.light, 
   marginLeft:50,
   marginTop:5,
   fontSize:16,
   fontWeight:"bold"
  }
})