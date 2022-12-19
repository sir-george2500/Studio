import { StyleSheet, Text, TouchableWithoutFeedback,View, Image} from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import colors from '../../config/colors'
import plus from '../../assets/plus.png';
import * as DocumentPicker from 'expo-document-picker';
export default function AddSong() {

    async function selectAudioFile() {
        try {
          const audioFile = await DocumentPicker.getDocumentAsync({
            type: 'audio/*',
          });
          console.log(audioFile);
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <Screen style={{marginTop:-12}}>
        <View style={styles.headerView}>
        <Text style={styles.mainText}>Upload your music to Soundnix</Text>
        </View>
        <View  style={styles.uploadView}>
        <TouchableWithoutFeedback onPress={selectAudioFile}>
            <View style={styles.uploadButton}>
            <View style={styles.styleUploadButtonView}>
          <Image 
            source={plus} 
            style={{
              width: 22,
              height: 22,
              tintColor: colors.black,
            }}
          />
        </View>
         <Text style={{color:colors.white,fontWeight:"bold"}}>Tab here and browse to your file</Text>
            </View>
        </TouchableWithoutFeedback>
        </View>
    </Screen>
 
    
  )
}

const styles = StyleSheet.create({
    mainText:{
        color:colors.light,
        alignItems:"center",
        fontSize:23,
        fontWeight:"bold",
        
      },
    headerView:{
        alignItems:"center",
    },
    uploadView:{
        alignItems:"center",
    }
    ,
    uploadButton:{
     width:300,
     height:200,
     marginTop:25,
     borderWidth:2,
     borderStyle:'dashed',
     borderColor:colors.light,
     justifyContent:"center",
     alignItems:"center"
    },
  styleUploadButtonView:
  {
    width: 60,
    height: 60,
    backgroundColor: colors.brandColor,
    borderRadius: 90*0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.brandColor,
    borderWidth:2,
    marginBottom: Platform.OS == "android" ? 50 : 30
  }      
    

})