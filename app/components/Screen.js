import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from "expo-constants";
import colors from '../config/colors';



function Screen({ children, style ,Header }) {
  return (
    <>
    <View style={styles.top}>
    {Header}
    </View>
    <SafeAreaView style={[styles.screen, style]}>
           
             <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
    screen: {
      paddingTop: Constants.statusBarHeight,
       flex: 1,
      backgroundColor:colors.dark
    },
    view: {
      flex: 1,
    },
    top:{
      marginTop:Constants.statusBarHeight,
    }
  });

export default Screen;