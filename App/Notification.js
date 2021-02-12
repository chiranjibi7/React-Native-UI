import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const Notification = (props) => {
    return (
        <TouchableOpacity>
        <View>
            {props.icon}
        <View style={styles.count}>
          <Text style={{color:'white',fontWeight:'bold'}}>3</Text>
        </View>
        </View>
        </TouchableOpacity>
    )
}

export default Notification

const styles = StyleSheet.create({
    count:{
        backgroundColor:'red',
        width:18,
        height: 18,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:-2,
        right:0
      }
})
