
import React from 'react';
import {View, StyleSheet } from 'react-native';
import ProductDetails from "./Screens/ProductDetails";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductDetails/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
