import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppForm from '../../../components/forms/AppForm';
import AppFormImagePicker from '../../../components/forms/AppFormImagePicker';
import AppFormField from '../../../components/forms/AppFormField';
import SubmitButton from '../../../components/forms/SubmitButton';
import colors from '../../../config/colors';
import AppText from '../../../components/AppText';
import AppPicker from '../../../components/Picker';
import AppFormPicker from '../../../components/forms/AppFormPicker';

 function AlbumDetail(props) {

    //pass the handleNext the submited value from the props
    const handleSubmit =(values)=>{
    props.next(values)
    }


const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];
    

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
 
    <AppFormPicker 
      items={categories}
      name="category"
      // numberOfColumns={3}
      // PickerItemComponent={CategoryPickerItem}
      placeholder="Category"
      width="50%"
      icon="apps"
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