
import React, { } from "react";
import { Image, View,  } from "react-native";
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';

//define constant values
const Tab = createBottomTabNavigator();

// stack declares
import HomeScreenStack from "./HomeScreenStack";
import ProfileScreenStack from "./ProfileScreenStack";
import SettingScreenStack from "./SettingScreenStack";
const home = require('../Images/home.png')

const TabbarOptions = {
    activeTintColor: 'green',
    inactiveTintColor: 'blue',
    tabBarShowLabel: true,    
    tabBarStyle: {

        backgroundColor: 'white',
        height: 50,
        alignItems: 'center',
       
    },
    
};
const profileTabIcon = ({ tintColor, size }) => RenderBottomTabIcon(tintColor ,home, home)
// render bottom tab icons
const RenderBottomTabIcon = (tintColor, selectedImage, unSelectedImage) => {
  return (
      <View style={{alignSelf:'center' , marginTop:5}}>
          <Image resizeMode='contain' source={(tintColor == 'red') ? selectedImage : unSelectedImage} style={{ height: 24, width: 24,  tintColor: tintColor }} />
         
      </View>
  );
}


const TabBarStack = (initialRouteName) => {
    return(
        <Tab.Navigator screenOptions={TabbarOptions}>
            <Tab.Screen name="Home" options={{tabBarIcon: profileTabIcon,
          tabBarLabel: 'Home' ,headerShown:false}} component={HomeScreenStack} />
            <Tab.Screen name="Profile" options={{tabBarIcon: profileTabIcon,
          tabBarLabel: 'Profile'}} component={ProfileScreenStack}  />
            <Tab.Screen name="Setting" options={{tabBarIcon: profileTabIcon,
          tabBarLabel: 'Setting',}} component={SettingScreenStack}  />
           
           
        </Tab.Navigator>       

    );
}


export default TabBarStack
