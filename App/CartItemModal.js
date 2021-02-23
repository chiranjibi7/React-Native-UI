import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { Button } from "native-base";

const CartItemModal = ({ isCartModalOpened, isCartModalClosed, cartItems,isCartItemsCleared }) => {
  return (
    <Modal animationType="slide" visible={isCartModalOpened}>
      <View style={styles.cartItemModal}>
        {
          cartItems.map((item) => (
            <View  style={styles.cartItem} key={item.name}>
              <View style={styles.cartItemHead}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemPrice}>${item.price}</Text>
              <Button
                block
                style={{
                  width: "30%",
                  backgroundColor: "#F06060",
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>BUY</Text>
              </Button>
              </View>
              <Text style={styles.cartItemDate}>{item.date.toString('YYYY-MM-dd')}</Text>
            </View>
            ))}

        <View style={styles.btnContainer}>
        <Button block warning onPress={isCartModalClosed} style={{width:'45%'}}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>CLOSE</Text>
        </Button>

        <Button block style={{justifyContent:'center',textAlign:'center',width:'45%',backgroundColor:'fff',borderColor:'#F06060',borderWidth:1}} onPress={isCartItemsCleared}>
          <Text style={{justifyContent:'center',textAlign:'center', color: "#F06060", fontWeight: "bold"}}>CLEAR ALL</Text>
        </Button>
        </View>
       
      </View>
    </Modal>
  );
};

export default CartItemModal;

const styles = StyleSheet.create({
  cartItemModal: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
    padding: 25,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.8,
    elevation: 7,
  },
  cartItem: {  
    borderColor:'#F06060',
    borderRadius:5,
    borderWidth:1,
    padding:10,
    marginBottom:10
  },
  cartItemHead:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:10
  },
  cartItemName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  cartItemPrice:{
    color:'#F06060',
    fontWeight:'bold',
    fontSize:25
  },
  cartItemDate:{
    opacity:0.5
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
});
