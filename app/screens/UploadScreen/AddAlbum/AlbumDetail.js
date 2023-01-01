import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppForm from '../../../components/forms/AppForm';
import AppFormImagePicker from '../../../components/forms/AppFormImagePicker';
import AppFormField from '../../../components/forms/AppFormField';
import SubmitButton from '../../../components/forms/SubmitButton';
import colors from '../../../config/colors';
import AppText from '../../../components/AppText';

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
     <View style={styles.inputContainer}>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <AppFormImagePicker name="image" />
      <AppText style={{color:colors.light,fontSize:12}}>Please Tap the icon upload your artwork</AppText>
      </View>
     <AppFormField
      autoCorrect={false}
      name = "artist"
      KeyboardType="text"     
      placeholder="artist"
      textContentType="text"
      paperInput = {true}
      placeholderTextColor={colors.medium}
      style={{backgroundColor:colors.black}}
      textColor={colors.light}
      activeOutlineColor={colors.light}
            />
      <AppFormField
      autoCorrect={false}
      name = "albumName"
      KeyboardType="text"     
      placeholder="album name"
      textContentType="text"
      paperInput = {true}
      placeholderTextColor={colors.medium}
      style={{backgroundColor:colors.black}}
      textColor={colors.light}
      activeOutlineColor={colors.light}
            />
 
   
     <SubmitButton title="Next" />
     </View>
   </AppForm>
  )
}

export default AlbumDetail;
const styles = StyleSheet.create({
  inputContainer:{
    paddingRight:10,
    paddingLeft:10,
   }
})