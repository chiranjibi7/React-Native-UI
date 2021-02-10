import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import ActiveItems from "./ActiveItems";

const ActiveNumbers = () => {
    return (
        <View style={styles.activeNumbers}>
           <ActiveItems number="250" item="Post"/>
           <ActiveItems number="2500" item="Following"/>
           <ActiveItems number="1500" item="Followers"/>
        </View>
    )
}

export default ActiveNumbers

const styles = StyleSheet.create({
    activeNumbers:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    }
})
