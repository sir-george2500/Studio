import { ScrollView, StyleSheet,View,} from 'react-native'
import React,{useState} from 'react'
import AppFormField from '../../../components/forms/AppFormField'
import colors from '../../../config/colors';
import {Formik } from "formik";
import MultiFormButton from '../../../components/MultiStepFormComponent/MultiFormButton';
import UploadSongButton from '../../../components/MultiStepFormComponent/UploadSongButton';
import ListSong from '../../../components/MultiStepFormComponent/ListSong';
import { Provider } from 'react-native-paper';
import NextBackButton from '../../../components/MultiStepFormComponent/NextBackButton';
import useSelectAudioFile from '../../../hooks/useSelectAudioFile';
import useUploadAlbumFile from '../../../hooks/UploadSongHook/useUploadAlbum';

export default function AddMusic(props) {
   
  const [songs, setSongs] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleSubmit =(values)=>{
    props.next(values)
    }
     
    const  selectAudioFile = async function(){
      const result = await useSelectAudioFile() 
      
       uploadAlbum(result.audioFile)

     
    }


    const uploadAlbum = async function (audiofile){
    const albumName = props.data.albumName;
    await useUploadAlbumFile(audiofile,albumName,setProgress,setSongs);
   }

   console.log(progress);
      
     
  return (
    
<ScrollView>
<View style={styles.form}>
<Formik
      initialValues = {props.data}
      onSubmit={handleSubmit}
     
>
  {({values}) => (
      <>      
    <UploadSongButton onPress={selectAudioFile} width={300} height={150} marginT={-30}/>        
    <View style={{marginTop:10}}>    
    {/* <ListSong songs={songs}  />   */}
    </View>
   
    <NextBackButton 
    onPrevious = {()=>props.prev(values)}  
    /> 
      </>
  )} 
</Formik>
</View>
</ScrollView>
    
  )
}

const styles = StyleSheet.create({
  form:{
    height:600,
    margin:20,
    marginTop:-13,
  },

  button:{
    width:90,
    borderRadius:10,
    backgroundColor:colors.brandColor,
   },
  
})