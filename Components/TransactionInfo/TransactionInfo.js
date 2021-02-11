import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import TransactionItem from "../../App/TransactionItem";
import { transactionDetails } from "../../App/api";

const TransactionInfo = (props) => {
  return (
    <View style={styles.transactionInfo}>
      <Header />
      <View>
        {transactionDetails.map((detail) => {
          return (
            <TransactionItem
              icon={detail.icon}
              purchaseType={detail.purchaseType}
              loanType={detail.loanType}
              value={detail.value}
            />
          );
        })}
      </View>
    </View>
  );
};

export default TransactionInfo;

const styles = StyleSheet.create({
  transactionInfo: {
    flex: 0.8,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 35,
  },
});
