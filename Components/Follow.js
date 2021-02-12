import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Follow = () => {
    return (
        <View style={styles.follow}>
            <Text style={styles.followText}>Follow</Text>
        </View>
    )
}

export default Follow

const styles = StyleSheet.create({
    follow:{
        marginVertical:60,
        backgroundColor: '#A826A3',
        padding:17,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    followText:{
        color:'white',
        fontSize: 18
    }
})
