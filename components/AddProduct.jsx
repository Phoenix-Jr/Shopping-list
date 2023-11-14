import React, { useState } from "react";
import { StyleSheet, View, Modal } from "react-native";
import ButtonComponent from "./ButtonComponent";
import Input from "./Input";

export default function AddProduct({
  submiHandler,
  displayModal,
  cancelNewProduct,
}) {
  const [product, setProduct] = useState("");

  const inputHandler = (val) => {
    const regex = /[^a-z]/gi;
    setProduct(val.replace(regex, ""));
  };

  const handleClick = () => {
    submiHandler(product);
    setProduct("");
  };

  return (
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Input
          style={styles.textInput}
          textPlaceholder="Nouveau produit"
          inputValue={product}
          onChangeHandler={inputHandler}
          maxLength={10}
        />
        <View style={styles.btnContainer}>
          <ButtonComponent
            onPressHandler={handleClick}
            btnTitle="Valider"
            style={styles.btnBlue}
          />
          <ButtonComponent
            onPressHandler={cancelNewProduct}
            btnTitle="Annuler"
            style={styles.btnTomato}
          />
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    flex: 1,
    padding: 20,
  },
  textInput: {
    padding: 5,
    textAlign: "center",
    fontSize: 19,
    marginBottom: 15,
    borderRadius: 30,
    height: 50,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnBlue: {
    backgroundColor: "seagreen",
    width: 150,
    borderRadius: 6,
  },
  btnTomato: {
    // width: "45%",
    backgroundColor: "tomato",
    width: 150,
    borderRadius: 6,
  },
});
