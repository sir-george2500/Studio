import React,{useState}from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles"
import colors from '../config/colors';


function SearchInput({ icon,width="100%",pass,padding ,br,m, eyes=false, ...otherProps }) {
  return (
    <KeyboardAvoidingView>


    <View style={[styles.container, 
        { width },
        {padding},
         {borderRadius:br,margin:m},
        {backgroundColor:colors.primary},{borderColor:colors.brandColor,borderWidth:0.2}]}>
             {/* <MaterialCommunityIcons
          name="close"
          size={25}
          color={defaultStyles.colors.brandColor}
          style={styles.icon}
        /> */}
            <TextInput
            placeholderTextColor={defaultStyles.colors.medium}
            style={[defaultStyles.text,styles.AppTextInputStyle]}
            secureTextEntry={eyes}
            {...otherProps}    
            placeholder="Search More"  
          />
          <View style={{marginRight:10}}>
     <TouchableOpacity>

      <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.black}
          style={styles.icon}
        />
     </TouchableOpacity>
        </View>
    </View>
    </KeyboardAvoidingView>
  )
}
export default SearchInput;
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 6,
        flexDirection: "row",
        padding: 20,
        marginVertical: 10,
        elevation: 10,
        height:38,
        justifyContent:"space-between",
        
        
      },
    
      AppTextInputStyle :{
         width:"86%",
         color:colors.black,
         fontSize:16,
      },
      icon: {
        marginRight: 0,
        paddingVertical: 10,
      },   
})