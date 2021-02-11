import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TotalBalanceContainer = () => {
    return (
        <View style={styles.totalBalanceContainer}>
            <Text style={styles.label}>Your Balance</Text>
            <Text style={styles.amount}>$547,000.00</Text>
        </View>
    )
}

export default TotalBalanceContainer

const styles = StyleSheet.create({
    totalBalanceContainer:{
        marginVertical:15,
        padding:10,
    },
    label:{
        color:'white',
        opacity:0.6,
        fontSize:18
    },
    amount:{
        color:'white',
        fontSize:27,
        marginTop:5
    }
})
