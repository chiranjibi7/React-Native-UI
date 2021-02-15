import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

const CustomButton = (props) => {
  return (
      <TouchableOpacity activeOpacity={0.6}>
    <View
      style={{
        ...styles.button,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
      }}
    >
      <Text
        style={{
          color: props.color,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
        }}
      >
        {props.title}
      </Text>
    </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
