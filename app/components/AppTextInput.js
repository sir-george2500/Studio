import React,{useState}from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles"
function AppTextInput({ icon,width="100%",pass,padding ,...otherProps }) {

  const [eyes,setEyes] = useState(true);
  return (
    
    <View style={[styles.container, { width },{padding}]}>

    { icon && pass ?
    <>
    <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
        <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text,styles.AppTextInputStyle]}
        secureTextEntry={eyes}
        {...otherProps}      
      />
      <TouchableOpacity
        style={styles.pass}
        onPress = {()=>setEyes(!eyes)}
        >
        {eyes ?
          <MaterialCommunityIcons
          name="eye-off"
          size={25}
          color={defaultStyles.colors.medium}       
        /> 
          :
        <MaterialCommunityIcons
          name={pass}
          size={25}
          color={defaultStyles.colors.medium}       
        />
        
        
        }
        </TouchableOpacity>
        </>
        :
        <>
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
        <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text,styles.AppTextInputStyle]}
        {...otherProps}      
      />
      </>
       }
     
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 20,
    marginVertical: 10,
    elevation: 10,
    
  },

  AppTextInputStyle :{
     width:"80%",
  },
  icon: {
    marginRight: 0,
    paddingVertical: 10,
    paddingLeft:5,
  },

  pass:{
    marginLeft:"auto",
    padding:10
  }
});

export default AppTextInput;