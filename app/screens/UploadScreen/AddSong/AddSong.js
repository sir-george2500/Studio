import { StyleSheet, Text, TouchableWithoutFeedback,
  View,
   Image,
   Modal
  } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../config/colors'
import Screen from '../../../components/Screen';
import AppButton from '../../../components/AppButton';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import UploadSongButton from '../../../components/MultiStepFormComponent/UploadSongButton';
import  useSelectAudioFile  from '../../../hooks/useSelectAudioFile';
import uploadAddSongFile from '../../../hooks/UploadSongHook/useUploadAudioFile';



export default function AddSong() {
  //Bring Out the modal 
  const [modalVisible, setModalVisible] = useState(false);
  const [progress, setProgress] = useState(0);
// This Function handle the selection of the song  
const  selectAudioFile = async function(){
  const result = await useSelectAudioFile()
  setModalVisible(result.modal);
  uploadAudioFile(result.audioFile);   
}


const uploadAudioFile = async function(audioFile){
  await uploadAddSongFile(audioFile ,setProgress);
}




  return (
    <Screen style={{marginTop:-12}}>
        <View style={styles.headerView}>
        <Text style={styles.mainText}>Upload your music to Soundnix</Text>
        </View>
        <View  style={styles.uploadView}>
        
        <UploadSongButton onPress={selectAudioFile}/>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContent}>
         <View style={styles.modalView}>
          {progress<1 ?
          (
            <Progress.Bar progress={progress} color={colors.brandColor}/>
          ):(
        <LottieView 
        autoPlay
        loop={false}
        source={require('../../../assets/animations/done.json')}
        />
          )
          
          }
         </View>
          <AppButton title="close"
           style={styles.modalButton} 
           color="white"
           styleText={{color:colors.white,fontSize:16}}
           onPress={() => setModalVisible(false)}
           />
      
        </View>
      </Modal>
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
  
  modalContent: {
    marginTop:40,
    height:350,
    weight:300,
    borderRadius:5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    margin: 20,
  },

  modalButton:{
    height:50,
    backgroundColor:colors.black,
    borderRadius:5,
  },
  modalView:{
    margin:15,
    marginLeft:-2,
    marginRight:-2,
    height:170,
    borderRadius:5,
    backgroundColor:colors.black,
    alignItems:"center",
    justifyContent:"center",
    
  }
    

})