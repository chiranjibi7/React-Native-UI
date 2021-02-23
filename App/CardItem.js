import React from 'react'
import { StyleSheet, Text, View, Image, Alert,} from 'react-native'
import {Button} from "native-base";

const CardItem = ({id,name,imgURL, price, description, category,dltItem,buyItem}) => {

    const deleteItemHandler=()=>{
        Alert.alert(
            'Delete Product',
            'Are you sure want to delete this product?',
            [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              { text: 'OK', onPress: () => dltItem(id)}
            ],
            { cancelable: false }
          );
    }

    const buyItemHandler=()=>{
        buyItem(id,name,imgURL,price,description,category);
    }

    return (
        <View style={styles.card}>
            <View style={styles.image}>
           <Image source={{uri: imgURL}} style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }} />
          </View>

          <View style={styles.info}>
            <Text style={{fontSize:20}}>{name}</Text>
            <Text style={{opacity:0.5,marginVertical:5}}>{category}</Text>
            <View style={styles.price}>
           <Text style={{fontSize:20,fontWeight:'bold',color:'#F06060'}}>${price}</Text>

           </View>
           <View style={styles.buttonContainer}>
            <Button block warning onPress={deleteItemHandler} style={styles.button}>
                <Text style={styles.btnText}>DELETE</Text>
            </Button>

            <Button block onPress={buyItemHandler} style={{...styles.button,backgroundColor:'#F06060'}}>
                <Text style={styles.btnText}>BUY</Text>
            </Button>
           </View>
          </View> 
         </View>
    )
}

export default CardItem

const styles = StyleSheet.create({
    card:{
        width: 300,
        paddingTop:20,
        paddingHorizontal:20,
        backgroundColor:'#fff',
        shadowColor:'black',
        shadowOpacity: 0.8,
        shadowOffset: {width:0 , height:1},
        shadowRadius:4,
        elevation:6,
        borderRadius:10,
        marginVertical:17
    },
    image:{
        justifyContent:'center',
        alignItems:'center'
    },
    info:{
        marginVertical:10
    },
    price:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    button:{
        paddingVertical:10,
        paddingHorizontal:25,
        backgroundColor:'#F06060',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:5
    },
    button:{
        width:'35%',
        height:30,
        borderRadius:5
    },
    btnText:{
        color:'#fff'
    }
})
