import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 

const Rating = () => {
    return (
        <View style={styles.rating}>
            <View>
                <Text style={styles.name}>Guatemalan beer</Text>
                <Text style={styles.info}>Guatemalan handcrafted Xaman beer</Text>
            </View>

            <View style={styles.price}>
                <Text style={styles.value}>$13.00</Text>
                <Text style={{fontSize:15}}>Give your rating</Text>
            </View>

            <View style={styles.starIcons}>
                <View style={styles.starIconsLeft}>
                <FontAwesome name="star" size={20} color="#FEC53A" />
                <FontAwesome style={{marginHorizontal:5}} name="star" size={20} color="#FEC53A" />
                <FontAwesome name="star" size={20} color="#FEC53A" />
                <FontAwesome style={{marginHorizontal:5}} name="star" size={20} color="#FEC53A" />
                <FontAwesome name="star" size={20} color="#FEC53A" />
                </View>

                <View style={styles.starIconsRight}>
                <FontAwesome name="star-o" size={20} color="black" />
                <FontAwesome style={{marginHorizontal:5}} name="star-o" size={20} color="black" />
                <FontAwesome name="star-o" size={20} color="black" />
                <FontAwesome style={{marginHorizontal:5}} name="star-o" size={20} color="black" />
                <FontAwesome name="star-o" size={20} color="black" />
                </View>
            </View>

            <View style={styles.bar}></View>
          
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    rating:{

    },
    name:{
        fontSize:20,
        fontWeight:'bold'
    },
    info:{
        opacity:0.5
    },
    price:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10
    },
    value:{
        fontSize:20,
        color:'#017670',
        fontWeight:'bold'
    },
    starIcons:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:5
    },
    starIconsLeft:{
        flexDirection:'row'
    },
    starIconsRight:{
        flexDirection:'row'
    },
    bar:{
        padding:10,
        borderBottomWidth:1.5,
        borderBottomColor:'black',
        opacity:0.2,
        marginBottom:10
    }
})
