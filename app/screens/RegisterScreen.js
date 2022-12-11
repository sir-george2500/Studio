import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Modal, SafeAreaView } from 'react-native';

import * as Yup from 'yup'
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
import { ScrollView } from 'react-native';
import ActivityIndicator from '../components/ActivityIndicator';
import Constants from "expo-constants";



import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
function RegisterScreen() {
  const [submitted,setSumbitted] = useState(false)
  const [modalVisible,setModalVisible] = useState(false);
  const [isError,setisError] = useState(false);
  const [displayError,setdisplayError] = useState('Error');
  const [Loading,setLoading] = useState(false);

  const handleSubmit=()=>{
    console.log("Hi")
  }

  return (
    <>

    <Image
        style={styles.logo}
        source={require('../assets/background.png')}
    />


   
    
     

 <ScrollView>      
     <>
     <ActivityIndicator />
<AppForm
        initialValues={{ name:'' ,email : '' , password :'' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
    >
          
       <View style={styles.inputContainer}>

         <AppFormField
         autoCorrect={false}
         icon="account"
         name="name"
         placeholder="Name"
                />
         <AppFormField
          autoCorrect={false}
          name = "email"
          icon="email"
          KeyboardType="email-address"     
          placeholder="Email"
          textContentType="emailAddress"
                />
     
        <AppFormField
          autoCorrect={false}
          name="password"
          autoCapitalize="none"
          icon="lock"
          pass="eye"
          KeyboardType="email-address"
          placeholder="Password"
          textContentType="password"
                 />
                
              
   <SubmitButton title="Enter" disable={submitted} />
       </View>
    </AppForm>
    <Modal visible={modalVisible} animationType="slide">
    <View   style={styles.ViewModalStyle}>
      <AppText style={{color:colors.green}}>Registration Successful</AppText>
      <AppButton  
      title="Close" 
      color='green' 
      textColor="white" 
      elevation={10} 
      borderColor="green"
    
      onPress={()=>setModalVisible(false)}/>
    </View>
    </Modal>
    
    <Modal visible={isError} animationType="slide">
    <View   style={styles.ViewModalStyle}>
      <AppText style={{color:colors.danger}}>{displayError}</AppText>
      <AppButton  
      title="Close" 
      color='danger' 
      textColor="white" 
      elevation={10} 
      borderColor="danger"
      onPress={()=>setisError(false)}/>
    </View>
    </Modal>
    </>
      </ScrollView>
   


</>
  )
}
export default RegisterScreen
const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom:20,
},
ViewModalStyle: {
alignItems: 'center',
flex: 1,
justifyContent: 'center'
},
registerScreen:{
paddingTop: Constants.statusBarHeight,
},

inputContainer:{
paddingRight:10,
paddingLeft:10,
}
});