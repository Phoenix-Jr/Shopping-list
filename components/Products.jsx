import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import Product from "./Product";

export default function Products({ products, deleteHandler }) {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Product item={item} deleteHandler={deleteHandler} />
      )}
    />
  );
}
const styles = StyleSheet.create({});
