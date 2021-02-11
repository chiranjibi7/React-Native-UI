import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    icon: {
      borderRadius: 100,
      padding: 8,
    },
  });

export const transactionDetails = [
  {
    icon: (
      <View style={{...styles.icon,backgroundColor:'#02CD89'}}>
        <MaterialIcons name="directions-car" size={35} color="white" />
      </View>
    ),
    purchaseType: "Car Purchase",
    loanType: "Auto Loan",
    value: "$250",
  },
  {
    icon: (
      <View style={{...styles.icon, backgroundColor:'#3641B6'}}>
        <MaterialIcons name="home-filled" size={35} color="white" />
      </View>
    ),
    purchaseType: "House Purchase",
    loanType: "Airbnb Home",
    value: "$2250",
  },
  {
    icon: (
      <View style={{...styles.icon,backgroundColor:'#FF5949'}}>
        <MaterialCommunityIcons name="gift" size={35} color="white" />
      </View>
    ),
    purchaseType: "Transport",
    loanType: "Uber, Pathao",
    value: "$250",
  },
  {
    icon: (
      <View style={{...styles.icon,backgroundColor:'#13BDBF'}}>
        <MaterialCommunityIcons name="shopping" size={35} color="white" />
      </View>
    ),
    purchaseType: "Shopping",
    loanType: "Wish, Apple",
    value: "$350",
  },
];


