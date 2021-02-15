import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../../App/CustomButton";

const Buttons = () => {
  return (
    <View style={styles.buttons}>
      <CustomButton
        title="Add to cart"
        color="#07807B"
        fontSize={15}
        backgroundColor="white"
        borderColor="#07807B"
        fontWeight='bold'
      />

      <CustomButton
        title="Place order"
        color="#FFFFFF"
        fontSize={15}
        fontWeight='bold'
        backgroundColor="#07807B"
        borderColor="#07807B"
      />
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  buttons: {
    width:'100%',
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:30,
    width:'100%'
  },
});
