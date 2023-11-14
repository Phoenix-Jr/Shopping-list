import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ButtonComponent = ({ onPressHandler, btnTitle, style }) => {
  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={0.6}>
      <View style={{ ...styles.btn, ...style }}>
        <Text style={styles.btnText}>{btnTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    backgroundColor: "grey",
    padding: 9,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
  },
});
export default ButtonComponent;
