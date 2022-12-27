import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Plus...
import plus from '../app/assets/plus.png'

// Font Awesome Icons...
import { FontAwesome5 ,Ionicons ,FontAwesome } from '@expo/vector-icons'
import { useRef } from 'react';
import colors from '../app/config/colors';
import DashboardScreen from '../app/screens/DashboardScreen';
import routes from './routes';
import Statistics from '../app/screens/StatisticsScreen';
import ShowUploadScreen from '../app/screens/ShowUploadScreen';
import Monetization from '../app/screens/MonetizationScreen';
import StatisticsScreen from '../app/screens/StatisticsScreen';
import MonetizationScreen from '../app/screens/MonetizationScreen';
import UploadScreen from '../app/screens/UploadScreen/UploadScreen';
import UploadNavigator from './UploadNavigation';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    const navigation = useNavigation();
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:colors.black,
      // Floating Tab Bar...
      tabBarStyle: {
        backgroundColor: colors.dark,
        position: 'absolute',
        bottom: 0,
        marginHorizontal: 0,
        // Max Height...
        height: 60,
      
        // Shadow...
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: {
          width: 10,
          height: 10
        },
        paddingHorizontal: 0,
        
      }
    }}>

      {
        // Tab Screens....

        // Tab ICons....
      }
      <Tab.Screen name={routes.DASHBOARD} component={DashboardScreen}  options={{
        tabBarActiveTintColor:colors.brandColor,
      
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 20
          }}>
            <FontAwesome5
              name="home"
              size={20}
              color={focused ? colors.brandColor : colors.white}
            ></FontAwesome5>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: 0,
            useNativeDriver: true
          }).start();
        }
      })}></Tab.Screen>

      <Tab.Screen name={routes.STATS} component={StatisticsScreen} options={{

tabBarActiveTintColor:colors.brandColor,
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 20
          }}>
            <Ionicons
              name="md-stats-chart-sharp"
              size={20}
              color={focused ? colors.brandColor: colors.white}
            ></Ionicons>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth(),
            useNativeDriver: true
          }).start();
        }
      })}></Tab.Screen>


      {

        // Extra Tab Screen For Action Button..
      }

<Tab.Screen 
  name={routes.UPLOADSCREEN}  
  component={UploadNavigator} 
  options={{
    tabBarActiveTintColor: colors.brandColor,
    title:'',
    tabBarIcon: ({ focused }) => (
      <TouchableOpacity onPress={()=> navigation.navigate(routes.UPLOADSCREEN)}>
        <View style={{
          width: 90,
          height: 90,
          backgroundColor: colors.white,
          borderRadius: 90*0.5,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: colors.brandColor,
          borderWidth:2,
          marginBottom: Platform.OS == "android" ? 50 : 30
        }}>
          <Image 
            source={plus} 
            style={{
              width: 22,
              height: 22,
              tintColor: colors.black,
            }}
          />
        </View>
      </TouchableOpacity>
    )
  }}
></Tab.Screen>

      <Tab.Screen name={"uploads"} component={ShowUploadScreen} options={{
        tabBarActiveTintColor:colors.brandColor,
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 20
          }}>
            <FontAwesome5
              name="music"
              size={20}
              color={focused ? colors.brandColor : colors.white}
            ></FontAwesome5>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 3,
            useNativeDriver: true
          }).start();
        }
      })}></Tab.Screen>

      <Tab.Screen name={routes.MONETIZATION} component={MonetizationScreen} options={{
        tabBarActiveTintColor:colors.brandColor,
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 20
          }}>
            <FontAwesome
              name="dollar"
              size={20}
              color={focused ? colors.brandColor : colors.white}
            ></FontAwesome>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 4,
            useNativeDriver: true
          }).start();
        }
      })}></Tab.Screen>

    </Tab.Navigator>

    <Animated.View style={{
      width: getWidth() - 20,
      height: 2,
      backgroundColor: colors.light,
      position: 'absolute',
      bottom: 98,
      // Horizontal Padding = 20...
      left: 50,
      borderRadius: 20,
      transform: [
        { translateX: tabOffsetValue }
      ]
    }}>

    </Animated.View> 
 </>
);
}

function getWidth() {
let width = Dimensions.get("window").width

// Horizontal Padding = 20...
width = width - 80

// Total five Tabs...
return width / 5
}




const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
});


export default AppNavigator;