import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Button from "../../../App/Button";

const Header = () => {
    return (
        <View style={styles.header} >
            <Text style={styles.title}>Transactions</Text>
            <Button style={styles.button}>See All</Button>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:-10
    },
    button:{
        width:'22%',
        backgroundColor:'#EFF1FE',
        borderRadius:15,
        padding:7
    },
    title:{
        fontSize:23,
        color:'#2F26D9',
    }
})
