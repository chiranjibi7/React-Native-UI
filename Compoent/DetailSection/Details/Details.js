import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Details = () => {
    return (
        <View>
            <View style={styles.details}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Details</Text>
                <Text style={{textAlign:'justify',marginTop:7}}>Guatemalan handcrafted Xaman beer bottle, with hops seeds in a small glass container along with an exclusive design beer glass behind and a dark background...
                <Text style={{color:'#FE0326'}}>Read More</Text>
                </Text>
            </View>
            
            <View style={styles.quantity}>
                <View>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Quantity</Text>
                </View>

                <View style={styles.sizer}>
                <MaterialCommunityIcons name="minus-circle" size={30} color="#BCBCBC" />
                <Text style={{marginHorizontal:4,fontSize:15}}>1</Text>
                <MaterialCommunityIcons name="plus-circle" size={30} color="#067F78" />
                </View>
            </View>

            <View style={styles.totalPrice}>
                <Text style={{fontSize:20, fontWeight:'bold',marginRight:15}}>Total Price</Text>
                <Text style={{fontSize:20, fontWeight:'bold',color:'#017670'}}>$13.00</Text>
            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    quantity:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:20,
    },
    sizer:{
        marginLeft:15,
        flexDirection:'row',
        alignItems:'center'
    },
    totalPrice:{
        flexDirection:'row',
        alignItems:'center'
    }
})
