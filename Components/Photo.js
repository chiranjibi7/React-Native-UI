import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Photo = () => {
  return (
    <View style={{...styles.photo}}>
      <Text style={styles.profileText}>JS</Text>
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  photo: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "purple",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 50,
    color: "purple",
  },
});
