import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Menu = () => {
  return (
    <View style={styles.menu}>
      <View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menu: {
    width: 50,
    height: 50,
    backgroundColor: "#EFF1FE",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "#0E43A3",
    width: 15,
    padding: 1,
    marginVertical: 2,
  },
});
