import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Card from "../../../App/Card";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

const ExpenseContainer = () => {
    return (
        <View style={styles.expenseContainer}>
            <Card style={{...styles.expenseAmountCard,...styles.cardItem}}>
            <MaterialIcons name="monetization-on" size={45} color="#3176F4" />
            <Text style={styles.amount}>$5,000</Text>
            <Text style={styles.text}>Expense</Text>
            </Card>

            <Card style={{...styles.goalsAmountCard,...styles.cardItem}}>
                <FontAwesome5 name="piggy-bank" size={40} color="#F2A716" />
                <Text style={styles.amount}>$15,000</Text>
                <Text style={styles.text}>Spends to Goals</Text>
            </Card>
        </View>
    )
}

export default ExpenseContainer

const styles = StyleSheet.create({
    expenseContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    cardItem:{
        height:180,
        width:150,
        padding:15,
        justifyContent:'space-evenly'
    },

    expenseAmountCard:{
       backgroundColor:'#C4F2FF',
    },

    goalsAmountCard:{
        backgroundColor:'#FFE6D7',
    },
    amount:{
        fontSize:24
    },
    text:{
        opacity:0.5
    }
})
