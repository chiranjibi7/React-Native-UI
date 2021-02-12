import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Menu from "../App/Menu";

const Header = () => {
    return (
        <View style={styles.header}>
            <Menu/>

        <View style={styles.notification}>
          <Text>Notif</Text>
        </View>
      </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginVertical: 30,
        backgroundColor:'green',
      },
     
      notification: {
          backgroundColor:'red',
          flex:1
      },
})
