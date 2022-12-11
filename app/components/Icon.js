import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';
function Icon({
    name,
    size=40,
    backgroundColor="#000",
    iconColor = "#fff",
    elev =1,
    marginTop,
    marginLeft,
    m=true
}) {
  return (
    <View style={{width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        marginTop,
        marginLeft,
        justifyContent: 'center',
          alignItems: 'center',
        
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation:elev,
      }}>     
        {m
        
        ?
        <MaterialCommunityIcons name={name} size={size*0.5}  color={iconColor}  />    
        :
        <AntDesign name={name} size={size * 0.5} color={iconColor} />
        }
      </View>
  );
}

const styles = StyleSheet.create({
  container:{}
});

export default Icon;