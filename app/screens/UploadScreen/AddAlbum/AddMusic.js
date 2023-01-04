import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppFormField from '../../../components/forms/AppFormField'
import colors from '../../../config/colors';
import { useFormikContext ,Formik } from "formik";
import MultiFormButton from '../../../components/MultiStepFormComponent/MultiFormButton';
import UploadSongButton from '../../../components/MultiStepFormComponent/UploadSongButton';


export default function AddMusic(props) {
  const handleSubmit =(values)=>{
    props.next(values)
    }
  return (
    <View style={styles.form}>
 <ScrollView>

<Formik
      initialValues = {props.data}
      onSubmit={handleSubmit}
     
>
  {({values}) => (
      <>
      
    <UploadSongButton />
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
 </ScrollView>
     
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