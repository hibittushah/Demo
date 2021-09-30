import React, { Component } from 'react';
import { Text,  StyleSheet, SafeAreaView,Image, TouchableOpacity } from 'react-native';

  
  const CustomDrawer = (props) => {   
    return (
      <SafeAreaView style={{flex: 1,padding:8}}>  
      <TouchableOpacity onPress={()=>props.navigation.navigate("HomeScreen")} style={{padding:8}}     >
          <Text style={{color:'black',fontSize:18}}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.navigate("Profile")} style={{padding:8}}     >
          <Text style={{color:'black',fontSize:18}}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.navigate("Setting")} style={{padding:8}}     >
          <Text style={{color:'black',fontSize:18}}>Setting</Text>
      </TouchableOpacity>           
      </SafeAreaView>
    );
  };
  
  export default CustomDrawer;