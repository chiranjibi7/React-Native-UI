import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.view1}>
       <Text style={styles.title}>Conversation</Text>
     </View>
     <View style={styles.view2}>
       <Text style={styles.title}>Conversation 1</Text>
       <Text style={styles.title}>Conversation 2</Text>
       <Text style={styles.title}>Conversation 3</Text>
       <Text style={styles.title}>Conversation 4</Text>
     </View >
     <View style={styles.view3}>
       {/* <Text style={styles.textFooter1}>A</Text>
       <Text style={styles.textFooter2}>B</Text>
       <Text style={styles.textFooter3}>C</Text>
       <Text style={styles.textFooter4}>D</Text> */}
       <View style={styles.view31}>
        <Text style={styles.text1}>A</Text>
        <Text style={styles.text1}>B</Text>
      </View>

       <View style={styles.view32}>
        <Text style={styles.text1}>C</Text>
        <Text style={styles.text1}>D</Text>
      </View>
     </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  view1:{
    flex:1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems:'center',
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color: 'white'
  },
  view2:{
    flex:8,
    backgroundColor: 'green',
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  view3:{
    flex:2,
    backgroundColor: 'blue',
  },
  view31:{
    flex:1,
    backgroundColor: 'blue',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  view32:{
    flex:1,
    backgroundColor: 'blue',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end'
  },
 
  // textFooter1:{
  //   fontSize:24,
  //   fontWeight:'bold',
  //   color:'white',
  //   position:'absolute',
  //   top:0,
  //   left:0
  // },
  // textFooter2:{
  //   fontSize:24,
  //   fontWeight:'bold',
  //   color:'white',
  //   position:'absolute',
  //   top:0,
  //   right:0
  // },
  // textFooter3:{
  //   fontSize:24,
  //   fontWeight:'bold',
  //   color:'white',
  //   position:'absolute',
  //   bottom:0,
  //   left:0
  // },
  // textFooter4:{
  //   fontSize:24,
  //   fontWeight:'bold',
  //   color:'white',
  //   position:'absolute',
  //   bottom:0,
  //   right:0
  // },
  text1:{
    fontSize:24,
    fontWeight:'bold',
    color:'white'
  }


});
