import React from 'react'
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import {DATA} from "../data/data";

const Home = (props) => {

    const filteredItemDetail=DATA.filter(item=> item.id === props.route.params.itemId)
    return (
        <View style={styles.categoryItemDetails}>
            <Text style={styles.text}>Category Item Details Screen</Text>
            {filteredItemDetail.map(item=> <View style={styles.card} key={item.id}>
                    <Image source={{uri:item.imgURL}} style={{height:200,width:200,resizeMode:'contain'}}/>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={{fontSize:18,fontWeight:'bold',color:"#F06060"}}>${item.price}</Text>
                    <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center'}}>{item.description}</Text>

            </View>)}
            <View style={styles.btnContainer}>
                <Button title="Go Back" onPress={()=>props.navigation.goBack()} />
            </View>

            <View style={styles.btnContainer}>
                <Button color="#F06060" title="Go to Home" onPress={()=>props.navigation.popToTop()} />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    categoryItemDetails: {
        flex: 1,
        backgroundColor: '#eee',
        padding:30,
        alignItems:'center',
        justifyContent:'center'
       
      },
      card: {
        marginVertical:15,
        width: "100%",
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
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
      btnContainer:{
          width:"100%",
          marginTop:20,
      }
})
