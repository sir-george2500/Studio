import React , {useState} from 'react'
import { View, StyleSheet, Text, Image, Modal, SafeAreaView } from 'react-native';
import * as Yup from 'yup'
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
import { ScrollView } from 'react-native';
import AppButton from '../components/AppButton';
import { getAuth} from "firebase/auth";
import { app } from '../api/firebase';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ErrorMessage from '../components/forms/ErrorMessage';
import ActivityIndicator from '../components/ActivityIndicator';
import Constants from "expo-constants";
import loginUser from '../../auth/loginUser';
import { async } from '@firebase/util';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function LoginScreen(props) {

const [submitted,setSumbitted] = useState(false)
const [modalVisible,setModalVisible] = useState(false);
const [isError,setisError] = useState(false);
const [displayError,setdisplayError] = useState('Error');
const [Loading,setLoading] = useState(false);

 const handleSubmit = async (values,{ resetForm }) =>{
  //This function is charge with the responsibility of recieving the User Input
  const { email, password } = values;
  setLoading(true);
  const auth = getAuth(app);
  try {
    
    const result = await loginUser(auth,email,password);

   if(result === true){  
    resetForm();
     setLoading(false)
   }

   let error =  result.message
   switch (error){
    case 'auth/wrong-password':
      handleError('Sorry the password is wrong');
      break
  }
     
  } catch (error) {
    console.log("Oops on un expected Error :", err);
  }


 }


function handleError(errorMessage) {
  setisError(true);
  setdisplayError(errorMessage);
  setSumbitted(false);
  setLoading(false);
}
  return (
    <>
    <ActivityIndicator  visible={Loading}/>
  

    <Image
        style={styles.logo}
        source={require('../assets/background.png')}
    />


   
    
     

 <ScrollView>      
     <>
<AppForm
        initialValues={{ name:'' ,email : '' , password :'' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
    >
          
       <View style={styles.inputContainer}>
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
                
              
   <SubmitButton 
    title="Login"
    disable={submitted}
     />
       </View>
    </AppForm>
    
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
  );
}

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



export default LoginScreen;