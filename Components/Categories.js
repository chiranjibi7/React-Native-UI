import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Card from "../App/Card";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Categories = () => {
    return (
        <View style={styles.categories}>
            <Text style={styles.title}>Choose a Categories</Text>

            <View style={styles.categoryItems}>

               <Card style={styles.card1}>
                <View style={styles.iconBox1}>
                <MaterialCommunityIcons name="home-account" size={30} color="white" />
                </View>
                 
                 <View>
                     <View>
                     <Text>Branch</Text>
                     </View>

                     <View>
                     <Text>Services</Text>
                     </View>
                 </View>
               </Card>

               <Card style={styles.card2}>
               <View style={styles.iconBox2}>
               <MaterialCommunityIcons name="credit-card-outline" size={30} color="white" />
                </View>
                 
                 <View>
                     <View>
                     <Text>Make a</Text>
                     </View>

                     <View>
                     <Text>Payment</Text>
                     </View>
                 </View>
                </Card>
            </View>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    categories:{
        marginVertical:20,
    },
    title:{
        fontSize:25,
        marginBottom:10
    },
    categoryItems:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    card1:{
        backgroundColor:'white',
        height:80,
        width:'45%',
        padding:10,
        flexDirection:'row',
        alignItems:'center'
    },
    card2:{
        backgroundColor:'white',
        height:80,
        width:'45%',
        padding:10,
        flexDirection:'row',
        alignItems:'center'
    },
    iconBox1: {
        backgroundColor: "#62DCFF",
        borderRadius: 100,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginRight:10
      },
      iconBox2: {
        backgroundColor: "#3A66FB",
        borderRadius: 100,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginRight:10
      },


})
