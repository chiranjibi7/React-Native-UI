import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = () => {
    return (
        <View style={styles.title}>
            <Text style={styles.title1}>Welcome Back</Text>
            <Text style={styles.title2}>Creative Mints</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title:{

    },
    title1:{
        fontSize:25,
        opacity:0.4,
    },
    title2:{
        fontSize:30,
    }
})
