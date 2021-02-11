import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TransactionItem = (props) => {
  return (
    <View style={styles.transactionItem}>
      <View style={styles.item}>
       {props.icon}
        <View style={styles.label}>
          <Text style={styles.purchaseType}>{props.purchaseType}</Text>
          <Text style={styles.loanType}>{props.loanType}</Text>
        </View>
      </View>

      <View style={styles.amount}>
        <Text style={styles.value}>{props.value}</Text>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  item: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
 
  label:{
    position:'absolute',
    left:'35%'
  },
  purchaseType: {
    fontWeight: "bold",
    color: "#2F26D9",
    opacity:0.8
  },
  loanType: {
    opacity: 0.5,
  },
  amount: {
    flex: 1,
    alignItems: "flex-end",
  },
  value: {
    fontWeight: "bold",
  },
});
