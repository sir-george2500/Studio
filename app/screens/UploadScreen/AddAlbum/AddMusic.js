import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppFormField from '../../../components/forms/AppFormField'
import colors from '../../../config/colors';
import { useFormikContext ,Formik } from "formik";
import MultiFormButton from '../../../components/MultiStepFormComponent/MultiFormButton';


export default function AddMusic(props) {
  const handleSubmit =(values)=>{
    props.next(values)
    }
  return (
    <View style={styles.form}>

<Formik
      initialValues = {props.data}
      onSubmit={handleSubmit}
     
>
  {({values}) => (
      <>
      <AppFormField
      autoCorrect={false}
      name = "email"
      icon="email"
      KeyboardType="email-address"     
      placeholder="Email"
      textContentType="emailAddress"
            />
 
    <AppFormField
      autoCorrect={false}
      name="password"
      autoCapitalize="none"
      icon="lock"
      pass="eye"
      KeyboardType="email-address"
      placeholder="Password"
      textContentType="password"
             />
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
    height:300,
    width:300,
    margin:20,
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