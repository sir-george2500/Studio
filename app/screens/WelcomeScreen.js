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

function WelcomeScreen(){

  return (
    <SafeAreaView style={styles.screen}>
        <Image
              style={styles.logo}
              source={require('../assets/welcome.png')}
          />
    <View  style={styles.container}>
      <Text>WelcomeScreen</Text>
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
        backgroundColor:colors.primary,
        flex:1,
       },
       logo: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom:20,
    }

})