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



 function ReleaseAlbum(props) {

    //pass the handleNext the submited value from the props
    const handleSubmit =(values)=>{
    props.next(values)
    }
    
const categories = [
  {
  
    label: "Private",
    value: 1,
  },
  {
    label: "Public",
    value: 2,
  },

 
  
];
    

  return (
    <ScrollView>

   <AppForm  
   initialValues={props.data}
   onSubmit={handleSubmit}
   >
     <View style={styles.inputContainer}>    
    <AppFormPicker 
      items={categories}
      name="release"
      // numberOfColumns={3}
      // PickerItemComponent={CategoryPickerItem}
      placeholder="Release"
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

export default ReleaseAlbum;
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