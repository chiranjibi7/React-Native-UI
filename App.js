
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Transactions from './Screens/Transactions';

export default function App() {
  return (
    <View style={styles.container}>
      <Transactions/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
