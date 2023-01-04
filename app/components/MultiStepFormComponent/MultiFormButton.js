import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../AppButton'
import { useFormikContext } from 'formik';

export default function MultiFormButton({
    onPress, 
    title, 
    next=true,
    style,
    styleButton
}) {

    const {
        handleSubmit
      } = useFormikContext();

      const callSubmit = () =>{
     handleSubmit()
      }
      
  return (

    <View style={style}>
    { next ===true ? (
        <AppButton 
           title={title} 
            elevation={10} 
            color="brandColor" 
            textColor="black"
            style={[styles.button , styleButton]} 
            styleText={styles.text} 
            onPress={callSubmit}
            />
    ) : (
    <AppButton
    title={title}
    elevation={10}
    color="brandColor"
    textColor="black"
    style={styles.button}
    styleText={[styles.text,styleButton]}
    onPress={onPress}
    />
    )}
    </View>
    )
    }
    
    


const styles = StyleSheet.create({
    button:{
        width:80,
        height:50,
        borderRadius:5,

    },
    text:{
        fontSize:13,
    }
})