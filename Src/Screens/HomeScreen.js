import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
const menu = require('../Images/menu.png')

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginTop: 25, marginLeft:8}}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                        <Image source={menu} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}



export default HomeScreen