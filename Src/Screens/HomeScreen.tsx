import React from 'react'
import { View, TouchableOpacity, Image, TextInput, Text, Alert } from 'react-native'
const menu = require('../Images/menu.png')

export interface Props {
    navigation: any
  }
  
  export interface State {
    todoInput :String
  }

class HomeScreen extends React.Component<Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            todoInput: '',
        }
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 8 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                        <Image source={menu} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                </View>

                <Text style={{ marginTop: 25,color: 'black', fontSize: 18,alignSelf:'center' }}>Enter Currecy Code</Text>


                <TextInput
                    style={{ marginTop: 25, backgroundColor: 'grey', width: '70%', paddingLeft: 4, height: 40, fontWeight: 'bold', color: '#fff', alignSelf: 'center', justifyContent: 'center' }}
                    placeholderStyle={{ fontWeight: 'bold' }}
                    placeholderTextColor='#fff'
                    autoCapitalize={'none'}
                    placeholder={'Enter Currency'}
                    onChangeText={(todoInput) => this.setState({ todoInput })}
                    value={this.state.todoInput}
                    returnKeyType={"done"}
                />

                <TouchableOpacity style={{ width: '70%', height: 40, backgroundColor: 'green', marginTop: 25, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }} onPress={() => this.goToSecondScreen()} >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }

    goToSecondScreen = () => {
        if(this.state.todoInput == ""){
            Alert.alert("Please Enter Currency Code")
        }else{
        this.props.navigation.navigate("SecondScreen", { currency: this.state.todoInput })
        }
    }

}



export default HomeScreen