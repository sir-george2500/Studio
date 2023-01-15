import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MultiFormButton from './MultiFormButton'

export default function NextBackButton({onPrevious}) {
  return (
    <View style={styles.buttonView}>
    <MultiFormButton 
    title="Back"
    onPress={onPrevious}
    next={false}
     />
   <MultiFormButton
    title="Next"
    next={true}
    style={{marginLeft:10}}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    buttonView:{
        marginHorizontal:'40%',
        flexDirection:'row',
       }
})