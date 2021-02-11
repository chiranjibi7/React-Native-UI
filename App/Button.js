import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Button = (props) => {
    return (
        <View style={{...styles.button,...props.style}}>
            <Text style={{color:'#3176F4',fontWeight:'bold'}}>{props.children}</Text>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    button:{
        shadowColor:'black',
        shadowOffset:{
            height:1,
            width:1
        },
        shadowOpacity:0.2,
        shadowRadius:6,
        elevation:2,
        justifyContent:'center',
        alignItems:'center'
    }
})
