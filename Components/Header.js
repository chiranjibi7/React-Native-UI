import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Menu from "../App/Menu";
import Notification from "../App/Notification";
import {Ionicons} from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={styles.header}>
            <Menu/>

        <View style={styles.notification}>
          <Notification icon={ <Ionicons name="notifications-outline" size={33} color="black"  />}/> 
          <Image style={styles.image} source={require("../assets/beckham.jpg")}/>
        </View>
      </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginVertical: 15,
      },
     
      notification: {
        flexDirection:'row',
          flex:1,
          justifyContent:'flex-end',
          alignItems:'center'
      },
      image:{
        borderRadius:100,
        marginLeft:20,
        height:50,
        width:50
      }
})
