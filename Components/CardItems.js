import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../App/Card";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const CardItems = () => {
  return (
    <View style={styles.cardItems}>

      <Card style={styles.card1}>
        <View style={styles.iconBox}>
          <View style={styles.firstIconBox}>
            <Foundation name="dollar" size={30} color="white" />
          </View>
        </View>
        <View>
            <Text style={styles.cardTitle}>Transactions</Text>
            <Text style={styles.cardSubtitle}>7 Items</Text>
        </View>
      </Card>

      <Card style={styles.card2}>
      <View style={styles.iconBox}>
        <FontAwesome name="shopping-bag" size={30} color="#FF5949" />
        </View>
        <View>
            <Text style={styles.cardTitle}>Budget</Text>
            <Text style={styles.cardSubtitle}>4 Items</Text>
        </View>
      </Card>

      <Card style={styles.card3}>
      <View style={styles.iconBox}>
        <AntDesign name="star" size={30} color="#ECAC48"/>
        </View>
        <View>
            <Text style={styles.cardTitle}>Recommendations</Text>
            <Text style={styles.cardSubtitle}>6 Items</Text>
        </View>
      </Card>

      <Card style={styles.card4}>
        <View style={styles.iconBox}>
        <FontAwesome name="credit-card-alt" size={25} color="#2F26D9" />
        </View>
        <View>
            <Text style={styles.cardTitle}>Credit Cards</Text>
            <Text style={styles.cardSubtitle}>3 Items</Text>
        </View>
      </Card>
    </View>
  );
};

export default CardItems;

const styles = StyleSheet.create({
  cardItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card1: {
    height: 150,
    width: 170,
    backgroundColor: "#01CD88",
    marginVertical: 5,
    padding:13,
  },
  card2: {
    height: 150,
    width: 170,
    backgroundColor: "#FF5949",
    marginVertical: 5,
    padding:13,
  },
  card3: {
    height: 150,
    width: 170,
    backgroundColor: "#ECAC48",
    marginVertical: 5,
    padding:13,
  },
  card4: {
    height: 150,
    width: 170,
    backgroundColor: "#2F26D9",
    marginVertical: 5,
    padding:13,
  },
  iconBox: {
    backgroundColor: "white",
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:12
  },
  firstIconBox:{
    backgroundColor: "#01CD88",
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle:{
    color:'white',
    fontSize: 15
  },
  cardSubtitle:{
    color:'white',
    fontSize:12,
    opacity:0.7
  }
});
