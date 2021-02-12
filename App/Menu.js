import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Menu = () => {
  return (
    <TouchableOpacity>
    <View style={styles.menu}>
      <View>
        <View style={{...styles.item,width: 15}}></View>
        <View style={{...styles.item,width: 20}}></View>
      </View>
    </View>
    </TouchableOpacity>
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
    padding: 1,
    marginVertical: 2,
  },
});
