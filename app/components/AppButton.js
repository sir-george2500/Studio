import React from 'react';
import { 
  StyleSheet ,
  TouchableOpacity,
  Text
} from 'react-native';
import colors from '../config/colors';
function AppButton({ title, onPress,color = "primary" , textColor ,borderColor,elevation=0,disable}) {
    return (
      <TouchableOpacity
        style={[styles.button, {
          backgroundColor: colors[color],
          borderColor: colors[borderColor],
          borderWidth: 1,
          elevation:elevation,
        }]}
        disabled={disable}
        onPress={onPress} >
        <Text style={[styles.text,{color:colors[textColor]}]}>{title}</Text>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,
      },
      text: {
        color: colors.white,
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold",
        
      },
});

export default AppButton;