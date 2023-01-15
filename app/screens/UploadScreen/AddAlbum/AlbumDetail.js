import { ScrollView, StyleSheet, Text, Touchable, View } from 'react-native'
import React, { useRef } from 'react'
import AppForm from '../../../components/forms/AppForm';
import AppFormImagePicker from '../../../components/forms/AppFormImagePicker';
import AppFormField from '../../../components/forms/AppFormField';
import SubmitButton from '../../../components/forms/SubmitButton';
import colors from '../../../config/colors';
import AppText from '../../../components/AppText';
import AppPicker from '../../../components/Picker';
import AppFormPicker from '../../../components/forms/AppFormPicker';
import { Button } from 'react-native-paper';
import MultFormButton from '../../../components/MultiStepFormComponent/MultiFormButton';
import {categories} from '../../../assets/categories';
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
  image: Yup
  .mixed()
  .test(
    'fileType',
    'Please upload a valid image file',
    value => value && value.startsWith('file:')
  )
  .required('An image is required'),
  artist: Yup.string().required().label("artist"),
  albumName: Yup.string().required().label("albumName"),
  category: Yup.object().required().nullable().label("Category")
});

 function AlbumDetail(props) {

   
    //pass the handleNext the submited value from the props
    const handleSubmit =(values)=>{
    props.next(values)
    }
    

    

  return (
    <ScrollView>

   <AppForm  
   initialValues={props.data}
   onSubmit={handleSubmit}
   validationSchema={validationSchema}
   
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
 
     
    <AppFormPicker 
      items={categories}
      name="category"
      // numberOfColumns={3}
      // PickerItemComponent={CategoryPickerItem}
      placeholder="Category"
      width="50%"
      icon="apps"
    />
   <View style={styles.buttonView}>
    <MultFormButton title="Next" next={true}/>
   </View>   
     </View>
   </AppForm>
    </ScrollView>
  )
}

export default AlbumDetail;
const styles = StyleSheet.create({
  inputContainer:{
    paddingRight:10,
    paddingLeft:10,
   },
   button:{
    width:90,
    borderRadius:10,
    backgroundColor:colors.brandColor,
   },
   buttonView:{
    marginHorizontal:'70%',
   }
})