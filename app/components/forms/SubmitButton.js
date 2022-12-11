import React from 'react';
import {StyleSheet } from 'react-native';
import {useFormikContext} from 'formik'
import AppButton from '../AppButton';


function SubmitButton({ title ,disable}) {
    
    const {
        handleSubmit
      } = useFormikContext();
  return (
    <AppButton 
    title={title} 
    elevation={10} 
    color="black" 
    textColor="primary" 
    disable={disable}
    onPress={handleSubmit}/>
    
    );
}

const styles = StyleSheet.create({
  container: {}
});

export default SubmitButton;