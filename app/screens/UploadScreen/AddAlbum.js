import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Screen from '../../components/Screen'
import ImageInput from '../../components/ImageInput';
import colors from '../../config/colors';

 function AddAlbum() {
  const [selectedImageURI, setSelectedImageURI] = useState(null);

  const onChangeImage = (uri) => {
    setSelectedImageURI(uri);
  };
  return (
    <Screen>
      <View  style={styles.containerView}>
        <View style={styles.uploadArtWorkView}>
       <ImageInput imageUri={selectedImageURI} onChangeImage={onChangeImage} iconName="music-note"/>
       <View  style={styles.uploadTextView}><Text style={styles.uploadText}>Tap the Icon to Upload artwork</Text></View>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
 uploadArtWorkView:{
  flexDirection:"row",
  marginLeft:10,
 },
 uploadText:{
  color:colors.white,
  fontSize:14,
  fontWeight:"bold",
 },
 uploadTextView:{
  marginTop:40,
  marginLeft:20,
 }

});

export default AddAlbum;