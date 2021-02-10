import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ActiveItems = ({number,item}) => {
    return (
        <View style={styles.activeItems}>
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.item}>{item}</Text>
        </View>
    )
}

export default ActiveItems

const styles = StyleSheet.create({
    number:{
        textAlign:'center',
        fontSize: 23,
        fontWeight:'bold',
        color:'purple',
        opacity: 0.7
    },
    item:{
        textAlign:'center',
        fontSize: 15,
        color:'purple',
        opacity: 0.3
    }
})
