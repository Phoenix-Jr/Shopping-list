import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default function Product({ item, deleteHandler }) {
  return (
    <Pressable onPress={() => deleteHandler(item.key)}>
      <View style={styles.items}>
        <FontAwesome name="remove" size={30} color={"white"} />
        <Text style={styles.element}>{item.name}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  items: {
    backgroundColor: "darkred",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 20,
  },
  element: {
    color: "#fff",
    fontSize: 17,
    marginLeft: 20,
  },
});
