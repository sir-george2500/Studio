import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";
import AppText from "../AppText";
import { StyleSheet } from "react-native";

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
  icon
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();



  console.log(touched[name])
  return (
    <>
      <Picker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        icon={icon}
      />
       {errors[name] && (
        <AppText style={styles.error}>{errors[name]}</AppText>
      )
      }
    </>
  );
}

export default AppFormPicker;


const styles = StyleSheet.create({
  error:{
    color:"red"
  }
})