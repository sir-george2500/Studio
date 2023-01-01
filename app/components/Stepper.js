import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import colors from '../config/colors';

const FormStepper = ({ activeStep, steps }) => {
  return (
    <View style={styles.stepper}>
      {steps.map((step, index) => {
        let stepContent;
        if (index < activeStep) {
          // Render check mark icon for previous steps
          stepContent = (
           
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <View style={styles.previous}>
              <MaterialCommunityIcons name="check" size={24} color={colors.black} />
            </View>
            <View style={styles.divider}>

            </View>
            </View>
           
          );
        } else if (index === activeStep) {
          // Render label for current step
          stepContent = <Text style={styles.stepLabel}>{step.label}</Text>;
        } else {
          // Render label for next steps
          stepContent = (
            <Text style={[styles.stepLabel, styles.nextStepLabel]}>{step.label}</Text>
          );
        }

        return (
          <View key={index} style={[styles.step, index === activeStep ? styles.activeStep : styles.inactiveStep]}>
            {stepContent}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  stepper: {
    flexDirection: 'row',
    margin:20,
  },
  step: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"center",
    borderWidth: 1,
    borderRadius: 50,

  },
 divider:{
  height:2,
  width:56,
  backgroundColor:colors.brandColor,
  },
  previous:{
   backgroundColor:colors.brandColor,
   width:30,
   height:30,
   borderRadius:10,
   justifyContent:"center",
   alignItems:"center",
  },
  activeStep: {
    borderColor: colors.brandColor,
   
  },
  inactiveStep: {
    borderColor: colors.lightGray,
  },
  stepLabel: {
    fontSize: 16,
    color: colors.white,
    margin: 10,
  },
  nextStepLabel: {
    color: colors.darkGray,
  },
});

export default FormStepper;
