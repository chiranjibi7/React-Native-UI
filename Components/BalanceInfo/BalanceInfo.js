import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import IconContainer from "./Components/IconContainer";
import TotalBalanceContainer from "./Components/TotalBalanceContainer";
import ExpenseContainer from "./Components/ExpenseContainer";

const BalanceInfo = () => {
    return (
        <View style={styles.balanceInfo}>
            <IconContainer/>
            <TotalBalanceContainer/>
            <ExpenseContainer/>
        </View>
    )
}

export default BalanceInfo

const styles = StyleSheet.create({
    balanceInfo:{
        flex: 1,
        backgroundColor:'#2F26D9',
        padding:25,
    },
   
})
