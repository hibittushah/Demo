import React from 'react'
import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native'
import { connect } from 'react-redux';
const arrow_left = require('../Images/arrow_left.png')

export interface Props {
    navigation: any
    route:any
  }
  
  export interface State {
    list :any
  }

class SecondScreen extends React.Component<Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            list: [{ name: 'Australian dollar', code: 'aud' }, { name: 'United States dollar', code: 'usd' }, { name: 'Indian rupee', code: 'inr' }],
        }
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 15, }}>
                <TouchableOpacity style={{marginTop:15}} onPress={() => this.props.navigation.goBack()} >
                    <Image source={arrow_left} style={{ height: 25, width: 25, tintColor: 'black' }} />
                </TouchableOpacity>

                <FlatList
                    data={this.state.list}
                    style={{ flex: 1, marginTop: 40, width: '100%', padding: 8 }}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={this.renderList}/>
            </View>
        );
    }



    renderList = ({ item }) => {
        return (
            <View style={{
                flex: 1, height: 70, width: "100%", borderStyle: "solid", borderBottomWidth: 1.2,
                padding: 12, backgroundColor: 'grey'
            }}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('ThirdScreen', { currency: this.props.route.params.currency, toConvert: item.code })} style={{ flexDirection: "row", flex: 1, alignItems: "center" }} activeOpacity={0.8} >
                    <Text style={{ fontSize: 20, marginLeft: 25, color: 'white' }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        UserData: state.login.UserData ? state.login.UserData : '',
        list: state.login.list ? state.login.list : []
    }
}


export default connect(mapStateToProps)(SecondScreen);
