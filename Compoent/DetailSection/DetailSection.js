import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Rating from "./Rating/Rating";
import Details from "./Details/Details";
import Buttons from "./Buttons/Buttons";

const DetailSection = () => {
    return (
        <View style={styles.detailSection}>
            <Rating/>
            <Details/>
            <Buttons/>
        </View>
    )
}

export default DetailSection

const styles = StyleSheet.create({
    detailSection:{
        padding:20,
        marginTop:220
    }
})
