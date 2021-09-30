import React, { Component } from 'react';
import {Provider} from "react-redux";
import Store from './Src/Redux/Store/configureStore';

//local class uses
import Navigation from './Src/Navigation/Entry';


const store = Store()



class App extends Component{
  render(){
    return(
      <Provider store={store}>
           <Navigation />
      </Provider>
    )
  }
}

export default App;