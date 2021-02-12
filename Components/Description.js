import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Description = () => {
  return (
    <View style={styles.description}>
      <Text>
        Sr. UI/UX Design Director @RespoGrid Formerly interactive director at @Mithun 
      </Text>
      <Text>If you have a project dont hesitate to email me: mithunrayy@gmail.com</Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  description: {
    marginVertical: 50,
  },
});
