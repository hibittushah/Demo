import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import {  createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const HomeScreenStack = () => {

    return (
        <Stack.Navigator>           
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, gestureEnabled:false }} />
        </Stack.Navigator>
  
    );
  }
export default HomeScreenStack