import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Components/Header";
import Title from "../Components/Title";
import Input from "../Components/Input";
import CardItems from "../Components/CardItems";
import Categories from "../Components/Categories";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
        <Header/>
        <Title/>
        <Input/>
        <CardItems/>
        <Categories/>
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
