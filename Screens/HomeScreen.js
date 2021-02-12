import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Components/Header";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
        <Header/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
 
});
