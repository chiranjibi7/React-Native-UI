import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Name = () => {
    return (
        <View style={styles.nameSection}>
        <Text style={styles.profileName}>John Smith</Text>
        <Text style={styles.designation}>UI/UI Designer</Text>
    </View>
    )
}

export default Name

const styles = StyleSheet.create({
    nameSection:{
        marginVertical:10
    },
    profileName:{
        fontSize: 30,
        color: 'purple',
        opacity:0.7
    },
    designation:{
        fontSize: 14,
        opacity: 0.5,
    }
})
