import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Header/Header";
import ProductImage from "./ProductImage/ProductImage";

const HeaderSection = () => {
    return (
        <View style={styles.headerSection}>
            <Header/>
            <ProductImage/>
        </View>
    )
}

export default HeaderSection

const styles = StyleSheet.create({
    headerSection:{
        // marginBottom:30
    }
})
