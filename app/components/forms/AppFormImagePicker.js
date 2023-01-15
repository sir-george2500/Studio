import React, { useState, useEffect } from "react";
import {useFormikContext} from 'formik'
import { StyleSheet, View } from "react-native";
import ErrorMessage from "./ErrorMessage";
import ImageInput from "../ImageInput";
import AppText from "../AppText";


function AppFormImagePicker({ name }) {
  // Use the useFormikContext hook to access the errors and touched objects from the Formik form
  const { errors, setFieldValue,setFieldError,submitCount,setFieldTouched, touched, values } = useFormikContext();
  const imageUris = values[name];

 
  // Declare a state variable for the selected image URI
  
 
  // Declare a function to handle changing the image URI
  const onChangeImage = (uri) => {
    setFieldValue(name,uri);
  };

  
  const setError = () => {
    if (touched[name] && submitCount > 0 && !imageUris) {
      setFieldError(name, 'An image is required');
    }
  }


  useEffect(() => {
    setError();
  }, [touched, submitCount, imageUris]);

  
  return (
    <>
    <View>
      <ImageInput imageUri={imageUris}  onChangeImage={onChangeImage} iconName="music-note"/>
    </View>
      {/* Pass the selectedImageURI and onChangeImage function to the ImageInput component */}
      {/* Display an error message if the field has been touched and there is an error */}
      {errors[name] && (
        <AppText style={styles.error}>{errors[name]}</AppText>
      )
      }
      
    </>
  );
}

export default AppFormImagePicker;

const styles = StyleSheet.create({
  container: {},
  error: {
      color:"red",
      fontSize:16,
  }
  
});