import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TransactionInfo = () => {
    return (
        <View style={styles.transactionInfo}>
            <Text></Text>
        </View>
    )
}

export default TransactionInfo

const styles = StyleSheet.create({
    transactionInfo:{
        flex:1,
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius:50,
        borderTopRightRadius:50
    }
})
