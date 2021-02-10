import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Screens/Profile';

const App=()=>{
  return(
    <View style={styles.container}>
       <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
});

export default App;
