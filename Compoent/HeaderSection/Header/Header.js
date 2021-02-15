import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.label}>
                <MaterialIcons name="arrow-back" size={30} color="white" />
                <Text style={styles.labelText}>Product Detail</Text>
            </View>
            <View style={styles.favourites}>
            <Ionicons name="md-heart" size={30} color="white" />
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header:{
        marginTop:30,
        padding:15,
        zIndex:1,
        marginTop: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    label:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    labelText:{
        color:'white',
        fontSize:20
    },
    favourites:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
    },
   
})
