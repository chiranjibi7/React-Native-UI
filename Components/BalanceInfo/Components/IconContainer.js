import React from "react";
import { StyleSheet, View,Text } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const IconContainer = () => {
  return (
    <View style={styles.iconContainer}>
      <AntDesign name="left" size={30} color="white" />

        <View>
        <Ionicons name="notifications-outline" size={30} color="white" />
        <View style={styles.count}>
          <Text style={{color:'white',fontWeight:'bold'}}>3</Text>
        </View>
        </View>
      
    </View>
  );
};

export default IconContainer;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    padding: 5,
  },
  count:{
    backgroundColor:'red',
    width:'50%',
    height:'50%',
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:-5,
    right:0
  }
});
