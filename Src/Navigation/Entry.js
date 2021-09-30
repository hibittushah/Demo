import React from "react";
import MainNavigation from "./MainNavigation";
import {  createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';


const EntryStack = () => {

    return (
        <NavigationContainer>
        <Stack.Navigator>           
            <Stack.Screen name="Home" component={MainNavigation} options={{ headerShown: false, gestureEnabled:false }} />
        </Stack.Navigator>
            </NavigationContainer>
    );
  }
export default EntryStack