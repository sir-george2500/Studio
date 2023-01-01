import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    color:colors.white,
  },
});

export default PickerItem;
