import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import React from "react";

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
      placeholder={props.textPlaceholder}
      onChangeText={props.onChangeHandler}
      value={props.inputValue}
      maxLength={props.maxLength}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.secondary,
    borderWidth: 1,
    height: 40,
    marginVertical: 5,
  },
});

export default Input;
