import React from 'react'
import { View, TextInput, TouchableOpacity ,Text ,FlatList} from 'react-native'
import { connect } from 'react-redux';
import {loginRequest ,listRequest} from '../Redux/Action/userAction'


class SettingScreen extends React.Component {
    constructor(props) {
        super(props);
       this.state={
        todoInput:'',
       }
    }

    componentDidMount(){
        this.props.dispatch(listRequest(null))
    }

    render() {
        return (
            <View style={{flex:1,alignItems:'center',marginTop:15,}}>
                      <TextInput
                        style={{backgroundColor:'grey',width:'70%',paddingLeft:4,height:40,fontWeight: 'bold',  color: '#fff',alignItems:'center',justifyContent:'center'}}
                        placeholderStyle={{fontWeight: 'bold'}}
                        placeholderTextColor='#fff'
                        placeholder={'Write'}
                        onChangeText= {(todoInput) => this.setState({todoInput})} 
                        value={this.state.todoInput}
                        returnKeyType={"done"}
                        onSubmitEditing={this.addtoList}
                         />

                         <TouchableOpacity onPress={()=>this.addtoList()} style={{backgroundColor:'green',alignItems:'center',justifyContent:'center',height:40,width:'70%',marginTop:45}}>
                             <Text style={{color:'white',fontSize:18}}>Submit</Text>
                         </TouchableOpacity>


                         <FlatList 
                        data={this.props.listData} 
                        style={{flex:1,marginTop:40,width:'100%',padding:8}}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}                    
                        renderItem={(value, index)=>this.renderList(value,index)} />

            </View>
        );
    }



renderList = ({item,index}) => {
    return(
        <View style={{flex:1,height:70,width:"100%", borderStyle:"solid", borderBottomWidth:1.2, 
            padding:12, backgroundColor:'grey'}}>
            <TouchableOpacity style={{flexDirection:"row", flex:1, alignItems:"center"}} activeOpacity={0.8} >
                <Text style={{fontSize:20, marginLeft:25,color:'white'}}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    )     
    }

addtoList = ()=>{
    const data = {
        name:this.state.todoInput
    }
    const newArray =  this.props.listData
    newArray.push(data)
    this.props.dispatch(listRequest(newArray))
    this.setState({todoInput:""})
}

}

function mapStateToProps(state) {
    return {
        UserData:state.login.UserData ? state.login.UserData :'',
        listData:state.login.listData ? state.login.listData :[]

    }
}

  
export default connect (mapStateToProps) (SettingScreen);
