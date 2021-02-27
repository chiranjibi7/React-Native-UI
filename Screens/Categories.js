import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { CATEGORY} from "../data/data";

const Categories = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.categories}>
      <Text style={{...styles.text,color:'#F06060'}}>Categories</Text>
      
        {CATEGORY.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate("Category Items",{itemCategory:item.category})}>
          <View style={styles.card} >
            <Text style={styles.text}>{item.category}</Text>
          </View>
      </TouchableOpacity>
        ))}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categories: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 30,
  },
  card: {
    marginTop:20,
    width: "100%",
    padding: 15,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius:10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
