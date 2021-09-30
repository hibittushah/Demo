import React from "react";
import Profile from "../Screens/ProfileScreen";
import {  createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const ProfileScreenStack = () => {

   return (
       <Stack.Navigator>           
           <Stack.Screen name="ProfileScreens" component={Profile} options={{ headerShown: false, gestureEnabled:false }} />
       </Stack.Navigator>

   );
}

export default ProfileScreenStack