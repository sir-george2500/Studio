import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,

} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from "expo-constants";
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import routes from '../../navigation/routes';

function WelcomeScreen({navigation}){

  return (
    <SafeAreaView style={styles.screen}>
        <Image
              style={styles.logo}
              source={require('../assets/welcome.png')}
          />
    <View  style={styles.container}>
      <Text style={styles.styleText_1}>Welcome To the Creator Studio</Text>
      <View  style={styles.styleText_2}>
      <Text style={styles.styleText}>Let go make you a Star</Text>
      <View style={styles.star}>
      <MaterialCommunityIcons name="star-shooting" size={24} color="black" />
      </View>
      </View>
    </View>

    <View style={styles.buttonsContainer}>
        <AppButton title="Login" 
        color="black" 
        textColor="primary" 
        elevation={10}
        onPress={()=>navigation.navigate(routes.LOGIN)}
         />
        <AppButton title="Register" 
         color="transparent" 
         textColor="black"
         borderColor="black"  
         onPress={()=>navigation.navigate(routes.REGISTER)}
         />
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
         flex: 1,
        backgroundColor:colors.primary
      },    
      container: {
        padding:5, 
        justifyContent:"center",
        alignItems:"center",
       },
       logo: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom:20,
    },
    styleText:{
     fontSize:16,
    },
    styleText_1:{
        fontSize:22,
        fontWeight:"bold"
      },
    styleText_2:{
      flexDirection:"row",
    },styleText_2:{
      flexDirection:"row",
    },
    star:{
      marginLeft:5,
      top:-3,
    },
    buttonsContainer: {
        top:50,
        padding: 20,
        width: "100%",
      },

})