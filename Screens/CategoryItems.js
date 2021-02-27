import React from 'react'
import { StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';
import {DATA} from "../data/data";

const CategoryItems = (props) => {

    const filteredItems=DATA.filter(item=> item.category === props.route.params.itemCategory)
    return (
        <View style={styles.categoryItems}>
            <Text style={{...styles.text,color:'#F06060'}}>Items</Text>

            {filteredItems.map((item) => (
        <TouchableOpacity key={item.id} onPress={()=>props.navigation.navigate("Category Item Details",{itemId: item.id})}>
          <View style={styles.card} >
            <Text style={styles.text}>{item.name}</Text>
          </View>
      </TouchableOpacity>
        ))}
            <View style={{marginTop:10}}>
                <Button color="#F06060"  title="Go Back" onPress={()=>props.navigation.goBack()} />
            </View>
        </View>
    )
}

export default CategoryItems

const styles = StyleSheet.create({
    categoryItems: {
        flex: 1,
        backgroundColor: '#eee',
        padding:30
      },
      card: {
        marginVertical:15,
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
})
