import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppFormField from '../../../components/forms/AppFormField'
import colors from '../../../config/colors';
import {Formik } from "formik";
import MultiFormButton from '../../../components/MultiStepFormComponent/MultiFormButton';
import UploadSongButton from '../../../components/MultiStepFormComponent/UploadSongButton';
import ListSong from '../../../components/MultiStepFormComponent/ListSong';
import { Provider } from 'react-native-paper';

export default function AddMusic(props) {
  const handleSubmit =(values)=>{
    props.next(values)
    }

    const songs = [
      {name: 'Song 1', progress: 50},
      {name: 'Song 2', progress: 75},
      {name: 'Song 3', progress: 45},
      {name: 'Song 4', progress: 80},
      {name: 'Song 5', progress: 45},
     
      ]
  return (
    
 
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
     
      
   <View style={styles.buttonView}>
   <MultiFormButton 
   title="Back"
   onPress={()=>props.prev(values)}
   next={false}
    />
  <MultiFormButton 
   title="Back"
   onPress={()=>props.prev(values)}
   next={false}
   style={{marginLeft:10}}
   />
  
   </View>

   
  
      </>
  )} 
</Formik>
</View>
     
    
  )
}

const styles = StyleSheet.create({
  form:{
    
    margin:20,
    marginTop:-13,
  },

  button:{
    width:90,
    borderRadius:10,
    backgroundColor:colors.brandColor,
   },
   buttonView:{
    marginHorizontal:'40%',
    flexDirection:'row',
   }
})