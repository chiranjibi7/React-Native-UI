import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "native-base";

const HeaderSection = ({
  addModalHandler,
  cartItemModalHandler,
  filterModalHandler,
  totalItems,
  searchHandler,
  searchedName,
  totalCartItems
}) => {
  const [selected, setSelected] = useState("");

  const onValueChangeHandler = (value) => {
    setSelected(value);
    filterModalHandler(value);
  };
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Product App</Text>
      </View>

      <View style={styles.filter}>
        <Text style={styles.subText}>Filter by Categories</Text>
        <View style={styles.picker}>
          <Picker
            note
            mode="dropdown"
            selectedValue={selected}
            onValueChange={onValueChangeHandler}
            style={{ color: "#fff" }}
          >
            <Picker.Item label="All" value="All" />
            <Picker.Item
              label="Electronic Gadgets"
              value="Electronic Gadgets"
            />
            <Picker.Item label="Clothes" value="Clothes" />
            <Picker.Item label="Foods" value="Foods" />
            <Picker.Item label="Drinks" value="Drinks" />
            <Picker.Item label="Groceries" value="Groceries" />
          </Picker>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Search Products"
        value={searchedName}
        onChangeText={searchHandler}
      />

      <View style={styles.addItem}>
        <Text style={styles.subText}>Total Items: {totalItems}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <TouchableOpacity activeOpacity={0.5}>
          <AntDesign name="shoppingcart" size={40} color="#fff" onPress={cartItemModalHandler} />
          </TouchableOpacity>
          <View style={styles.cartTextContainer}>
          <Text style={{...styles.subText,...styles.cartText}}>{totalCartItems}</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <AntDesign
            name="pluscircle"
            size={45}
            color="#fff"
            onPress={addModalHandler}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#F06060",
    paddingHorizontal: 20,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  titleText: {
    padding: 5,
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
  subText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  picker: {
    flex: 1,
    marginLeft: 20,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 7,
  },
  addItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  cartText:{
    color:'#F06060'
  },
  cartTextContainer:{
    backgroundColor:'#fff',
    borderRadius:100,
    position:'absolute',
    top:-8,
    right:-15,
    height:25,
    width:25,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default HeaderSection;
