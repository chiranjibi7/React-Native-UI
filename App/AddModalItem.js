import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { Button } from "native-base";
import Picker from "./Picker";

const AddModalItem = ({
  isOpened,
  isClosed,
  addNameHandler,
  addPriceHandler,
  addCategoryHandler,
  addImageHandler,
  addIdHandler,
  addDescriptionHandler,
  nameValue,
  addProductHandler
}) => {
  return (
    <Modal animationType="slide"  visible={isOpened}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.addModal}>
          <View style={styles.header}>
            <Text style={styles.headerText}>ADD PRODUCT</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.inputField}
                value={nameValue}
                onChangeText={(text) => addNameHandler(text)}
              />
            </View>

            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Price</Text>
              <TextInput
                style={styles.inputField}
                keyboardType="numeric"
                onChangeText={(text) => addPriceHandler(text)}
              />
            </View>

            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Category</Text>
              <Picker addCategoryHandler={addCategoryHandler} />
            </View>

            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Image</Text>
              <TextInput
                style={styles.inputField}
                onChangeText={(text) => addImageHandler(text)}
              />
            </View>

            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Id</Text>
              <TextInput
                style={styles.inputField}
                keyboardType="numeric"
                onChangeText={(text) => addIdHandler(text)}
              />
            </View>

            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Description</Text>
              <TextInput
                multiline={true}
                numberOfLines={3}
                style={styles.textArea}
                onChangeText={(text) => addDescriptionHandler(text)}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                block
                warning
                style={{ width: "30%", borderRadius: 5 }}
                onPress={isClosed}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>CLOSE</Text>
              </Button>

              <Button
                block
                style={{
                  backgroundColor: "#F06060",
                  width: "30%",
                  borderRadius: 5,
                }}
                onPress={addProductHandler}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>ADD</Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addModal: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
    paddingVertical: 25,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.8,
    elevation: 7,
  },

  header: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#F06060",
    fontSize: 18,
    fontWeight: "bold",
  },
  form: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputSection: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputField: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
  textArea: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    textAlignVertical: "top",
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
});

export default AddModalItem;
