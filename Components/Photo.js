import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

const Photo = () => {
  return (
    <View>
         <Ionicons name="arrow-back" size={30} color="purple" />
      <Image style={styles.photo} source={require("../assets/photo.jpg")} />
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  photo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "purple",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop:50
  },
});
