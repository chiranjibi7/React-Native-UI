import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = ({children,style}) => {
    return (
        <View style={{...styles.card, ...style}}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        shadowColor:'black',
        shadowOffset:{width:5,height:5},
        shadowOpacity: 0.5,
        shadowRadius:6,
        elevation: 5
    }
})
