import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppForm from '../../../components/forms/AppForm'
import AppFormField from '../../../components/forms/AppFormField'
import SubmitButton from '../../../components/forms/SubmitButton';

export default function AddMusic(props) {

  const handleSubmit =(values)=>{
    props.next(values)
    }
  return (
    <View style={styles.form}>

    <AppForm  
   initialValues={props.data}
   onSubmit={handleSubmit}
   >
     
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
     <SubmitButton title="Next" />
   </AppForm>
    </View>
  )
}

const styles = StyleSheet.create({
  form:{
    height:300,
    width:300,
    margin:20,
  }
})