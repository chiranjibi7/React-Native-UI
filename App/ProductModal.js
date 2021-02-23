import React from "react";
import { StyleSheet, Text, View, Modal, Image } from "react-native";
import { Button } from "native-base";

const ProductModal = ({
  isProductModalOpened,
  isProductModalClosed,
  productDetail,
  addToCartHandler,
}) => {
  return (
    <Modal animationType="slide" visible={isProductModalOpened}>
      <View style={styles.productModal}>
        <Image
          source={{ uri: productDetail.imgURL }}
          style={{
            resizeMode: "contain",
            height: "50%",
            width: "100%",
          }}
        />
        <View style={styles.detail}>
          <Text
            style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}
          >
            {productDetail.name}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 14, opacity: 0.5 }}>
            {productDetail.category}
          </Text>
          <Text
            style={{ fontSize: 17, marginVertical: 10, textAlign: "center" }}
          >
            {productDetail.description}
          </Text>
          <Text style={{ fontSize: 23, color: "#F06060", fontWeight: "bold" }}>
            ${productDetail.price}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            bordered
            success
            style={{
              width: "40%",
              borderRadius: 5,
              borderColor: "#F06060",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#F06060", fontWeight: "bold" }}>
              ORDER NOW
            </Text>
          </Button>

          <Button
            block
            style={{
              backgroundColor: "#F06060",
              width: "40%",
              borderRadius: 5,
            }}
            onPress={() =>
              addToCartHandler(
                productDetail.name,
                productDetail.price,
                new Date()
              )
            }
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              ADD TO CART
            </Text>
          </Button>
        </View>

        <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
          <Button
            block
            warning
            style={{ width: "100%", borderRadius: 5 }}
            onPress={isProductModalClosed}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>CLOSE</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ProductModal;

const styles = StyleSheet.create({
  productModal: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
    paddingVertical: 25,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.8,
    elevation: 7,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "#F06060",
    fontSize: 25,
    fontWeight: "bold",
  },
  detail: {
    padding: 20,
  },
  buttonContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
