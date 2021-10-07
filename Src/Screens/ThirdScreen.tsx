import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { getCurrencyList } from '../Redux/Action/userAction'
const arrow_left = require('../Images/arrow_left.png')

export interface Props {
    navigation: any
    dispatch:any
    route:any
    list:any
  }
  
  export interface State {
    currency :String,
    toConvert :String
  }
  
class ThirdScreen extends React.Component<Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            currency:'',
            toConvert:''
        }
    }

    componentDidMount() {
        this.setState({currency:this.props.route.params.currency,toConvert:this.props.route.params.toConvert},()=>{
            this.props.dispatch(getCurrencyList(this.state.currency + "/" + this.state.toConvert+ ".json"))
        })
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 15, }}>
                <TouchableOpacity style={{marginTop:15}} onPress={() => this.props.navigation.goBack()} >
                    <Image source={arrow_left} style={{ height: 25, width: 25, tintColor: 'black' }} />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 20 ,marginTop:30 ,alignSelf:'center' }}>{"Date - "+this.props.list.date}</Text>

                {this.state.toConvert == "aud" ?
                <Text style={{ color: 'black', fontSize: 20 ,marginTop:30 ,alignSelf:'center' }}>{this.props.list.aud}</Text>
                : this.state.toConvert == "inr" ?
                <Text style={{ color: 'black', fontSize: 20 ,marginTop:30 ,alignSelf:'center' }}>{this.props.list.inr}</Text>
                :         
                 <Text style={{ color: 'black', fontSize: 20 ,marginTop:30 ,alignSelf:'center' }}>{this.props.list.usd}</Text>
        }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.login.list ? state.login.list : []
    }
}


export default connect(mapStateToProps)(ThirdScreen);
