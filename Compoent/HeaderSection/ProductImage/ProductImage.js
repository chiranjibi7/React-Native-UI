import React from 'react'
import { StyleSheet, Image} from 'react-native'

const ProductImage = () => {
    return (

            <Image style={styles.image}  source={require("../../../assets/beer.jpg")} />

    )
}

export default ProductImage

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:322 ,
        position:'absolute',
        top:0,
        resizeMode:'contain',
    }

})
