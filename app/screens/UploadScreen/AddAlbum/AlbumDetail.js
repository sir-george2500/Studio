import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppForm from '../../../components/forms/AppForm';
import AppFormImagePicker from '../../../components/forms/AppFormImagePicker';
import AppFormField from '../../../components/forms/AppFormField';
import SubmitButton from '../../../components/forms/SubmitButton';

 function AlbumDetail(props) {

    //pass the handleNext the submited value from the props
    const handleSubmit =(values)=>{
    props.next(values)
    }

    

  return (
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
  )
}

export default AlbumDetail;
const styles = StyleSheet.create({})