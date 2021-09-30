import React from "react";
import SettingScreen from "../Screens/SettingScreen";
import {  createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();



const SettingScreenStack = () => {

    return (
        <Stack.Navigator>           
            <Stack.Screen name="SettingScreens" component={SettingScreen} options={{ headerShown: false, gestureEnabled:false }} />
        </Stack.Navigator>
  
    );
  }
  

export default SettingScreenStack