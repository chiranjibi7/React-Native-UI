import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import CardItem from "../../App/CardItem";

const Body = ({DATAS,dltItem,buyItem}) => {   

    return (
       <FlatList
       
        data={DATAS}
        renderItem={({item})=>(
            <View  style={styles.body}>
                <CardItem 
                id={item.id}
                name={item.name}
                imgURL={item.imgURL}
                price={item.price}
                description={item.description}
                category={item.category}
                dltItem={dltItem}
                buyItem={buyItem}/>
            </View>
        )}
        keyExtractor={item=> item.id}
       />
       
    )
}

export default Body

const styles = StyleSheet.create({
    body:{
        paddingHorizontal:25,
        alignItems:'center',
        backgroundColor:'#eee',
        flex:1
    }
})
