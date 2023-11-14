import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import DismissKeyboard from "./components/DismissKeyboard";
import ButtonComponent from "./components/ButtonComponent";
import Header from "./components/Header";
import Colors from "./constants/colors";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
const fetchFont = () => {
  return Font.loadAsync({
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
  });
};

export default function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // if (!fontsLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFont}
  //       onFinish={() => setFontsLoaded(true)}
  //     />
  //   );
  // }

  const submiHandler = (product) => {
    if (product.length > 1) {
      const idString = Date.now().toString();
      setMyProducts((currentMyProducts) => [
        { key: idString, name: product },
        ...currentMyProducts,
      ]);
      setDisplayModal(false);
    } else {
      setShowModal(true);
    }
  };
  const deleteHandler = (key) => {
    setMyProducts((currentMyProducts) =>
      currentMyProducts.filter((product) => product.key !== key)
    );
  };
  const cancelNewProduct = () => {
    setDisplayModal(false);
  };
  return (
    <DismissKeyboard>
      <ImageBackground
        style={styles.bgImage}
        source={require("./assets/background.jpg")}
      >
        <Header />
        <View style={styles.container}>
          <Modal
            visible={showModal}
            onRequestClose={() => setShowModal(false)}
            animationType="fade"
            transparent
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}> OUPS !</Text>
                </View>
                <View style={styles.modalBody}>
                  <Image
                    source={require("./assets/red-check-128.png")}
                    style={styles.redCheck128}
                  />
                  <Text style={styles.modalBodyText}>
                    Merci d'indiquer plus d'un caractère
                  </Text>
                </View>
                <View style={styles.modalFooter}>
                  <Pressable
                    style={styles.pressableBtnModal}
                    onPress={() => setShowModal(false)}
                  >
                    <Text style={styles.modalBtn}>OK</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <ButtonComponent
            btnTitle="Nouveau produit"
            onPressHandler={() => setDisplayModal(true)}
            style={styles.addProductBtn}
          />
          <AddProduct
            submiHandler={submiHandler}
            displayModal={displayModal}
            cancelNewProduct={cancelNewProduct}
          />
          <Products products={myProducts} deleteHandler={deleteHandler} />
        </View>
      </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
    flex: 1,
    // backgroundColor: "yellow",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalContent: {
    width: "90%",
    height: 300,
    backgroundColor: Colors.white,
    // padding: 9,
    alignItems: "center",
    borderRadius: 15,
  },
  modalHeader: {
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomColor: Colors.secondary,
    backgroundColor: "#444",
  },
  modalHeaderText: {
    color: Colors.secondary,
    fontSize: 17,
  },
  modalBody: {
    // backgroundColor: "red",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBodyText: {
    fontSize: 17,
  },
  modalFooter: {
    // backgroundColor: "black",
    width: "100%",
  },
  pressableBtnModal: {
    backgroundColor: Colors.info,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalBtn: {
    fontSize: 17,
    color: Colors.white,
    textAlign: "center",
    padding: 16,
  },
  redCheck128: {
    width: 100,
    height: 100,
  },
  addProductBtn: {
    backgroundColor: Colors.success,
    padding: 20,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "white",
    marginBottom: 20,
  },
  bgImage: {
    flex: 1,
  },
});
