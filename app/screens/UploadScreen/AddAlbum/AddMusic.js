import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppFormField from '../../../components/forms/AppFormField'
import colors from '../../../config/colors';
import {Formik } from "formik";
import MultiFormButton from '../../../components/MultiStepFormComponent/MultiFormButton';
import UploadSongButton from '../../../components/MultiStepFormComponent/UploadSongButton';
import ListSong from '../../../components/MultiStepFormComponent/ListSong';
import { Provider } from 'react-native-paper';
import NextBackButton from '../../../components/MultiStepFormComponent/NextBackButton';

export default function AddMusic(props) {

  const handleSubmit =(values)=>{
    props.next(values)
    
    }

    const songs = [
      {id: 1, name: 'Song 1', progress: 50},
      {id: 2, name: 'Song 2', progress: 75},
      {id: 3, name: 'Song 3', progress: 45},
      {id: 4, name: 'Song 4', progress: 80},
      {id: 5, name: 'Song 5', progress: 45},      
        ]
      
     
  return (
    
<ScrollView>
<View style={styles.form}>
<Formik
      initialValues = {props.data}
      onSubmit={handleSubmit}
     
>
  {({values}) => (
      <>      
    <UploadSongButton width={300} height={150} marginT={-30}/>        
    <View style={{marginTop:10}}>    
    <ListSong songs={songs}  />  
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