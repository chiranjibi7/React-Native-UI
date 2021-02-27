import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import Categories from "../Screens/Categories";
import CategoryItems from "../Screens/CategoryItems";
import CategoryItemDetails from "../Screens/CategoryItemDetails";

const Stack= createStackNavigator();

export default HomeNavigation=()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name="Categories" component={Categories} options={{title:'Home'}} />
                <Stack.Screen name="Category Items" component={CategoryItems} />
                <Stack.Screen name="Category Item Details" component={CategoryItemDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}