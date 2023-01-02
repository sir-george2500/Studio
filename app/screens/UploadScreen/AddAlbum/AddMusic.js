import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppForm from '../../../components/forms/AppForm'
import AppFormField from '../../../components/forms/AppFormField'
import SubmitButton from '../../../components/forms/SubmitButton';
import colors from '../../../config/colors';
import { useFormikContext ,Formik } from "formik";
import { Button } from 'react-native-paper';

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
      paperInput = {true}
      mode="outlined"
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
   <Button mode="contained" 
    style={styles.button}
    textColor={colors.black}
    onPress={()=>props.prev(values)}
    >
   Back
  </Button>
   <Button mode="contained" 
    style={[styles.button,{marginLeft:5}]}
    textColor={colors.black}
    onPress={handleSubmit}>
    Next
  </Button>
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