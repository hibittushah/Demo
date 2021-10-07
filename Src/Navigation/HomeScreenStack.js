import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import SecondScreen from "../Screens/SecondScreen";
import ThirdScreen from "../Screens/ThirdScreen";

import {  createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const HomeScreenStack = () => {

    return (
        <Stack.Navigator>           
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, gestureEnabled:false }} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false, gestureEnabled:false }} />
            <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{ headerShown: false, gestureEnabled:false }} />

        </Stack.Navigator>
  
    );
  }
export default HomeScreenStack