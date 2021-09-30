import React, { Component } from 'react';


// support class
import { createDrawerNavigator } from '@react-navigation/drawer';

//define constant values
const Drawer = createDrawerNavigator();
import CustomDrawer from '../Screens/CustomDrawer'
// class declare
import TabStack from "./TabStack";
import { connect } from "react-redux";

// local class variable

export const instance = {
    prop: { dispatch: (data) => { } }
}

class MainNavigation extends React.Component {
    constructor(props) {
        super(props)
        instance.prop = props;
        this.state = {
          
      
          }
    }

    componentDidMount = () => {

    }

    

    render() {
        return (
          
            <Drawer.Navigator initialRouteName="Home"
             drawerContent={(props) => <CustomDrawer {...props} />}
              screenOptions={{
                activeTintColor: '#e91e63',
                itemStyle: {marginVertical: 5},
              }}>
              <Drawer.Screen
                name="HomeStack"
                options={{drawerLabel: 'Home',headerShown:false}}
                component={TabStack}
              />                 
            </Drawer.Navigator>
        )
    }
}
function mapStateToProps(state) {
    return {
    }
}
export default connect(mapStateToProps)(MainNavigation);
