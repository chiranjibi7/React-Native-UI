import React from 'react'
import { StyleSheet, Text, View , TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Input = () => {
    return (
        <View style={styles.input}>
            <Ionicons name="md-search" size={22} color="black" />
            <TextInput placeholder="Search" style={{marginLeft:10}}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#EFF1FE',
        flexDirection:'row',
        alignItems:'center',
        padding:18,
        marginVertical:25,
        borderRadius:20
    }
})
