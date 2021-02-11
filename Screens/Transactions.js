import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BalanceInfo from '../Components/BalanceInfo/BalanceInfo';
import TransactionInfo from '../Components/TransactionInfo/TransactionInfo';

const Transactions = () => {
    return (
        <View style={styles.screen}>
           <BalanceInfo/>
           <TransactionInfo/>
        </View>
    )
}

export default Transactions;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#2F26D9'
    }
})
