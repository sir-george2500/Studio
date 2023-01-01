import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik'
import { TextInput } from 'react-native-paper';
import colors from '../../config/colors';



function AppFormField({ name ,paperInput=false, ...otherProps }) {
  
  const {
    setFieldTouched,
  setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
   
    <>
    {
      paperInput ?
      (
        <TextInput
        onBlur={() => setFieldTouched(name)}
        mode="outlined"
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
       
        
      />
      )
      :
      (
        <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={text =>setFieldValue(name,text)}
        value = {values[name]}
              {...otherProps}  
               />
      )
    }
      

                    
        <ErrorMessage error={errors[name]} touch={touched[name]} />
        
      
      

      
      </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AppFormField;