import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        shadowColor:'black',
        shadowOffset:{
            height:1,
            width:1
        },
        shadowOpacity:0.2,
        shadowRadius:6,
        elevation:2
    }
})
