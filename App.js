import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from './assets/snack-icon.png';

class App extends Component {
  render(){
    return(
      <View style={style.container}>
        <View style={style.container1}> 
      <Text style={style.textdesign}>'Hello World'</Text>
          <Image source={logo} style={style.imgdesign} />
        </View>
      </View>
      )
    }
  }
 
  const style = StyleSheet.create({
    imgdesign:{
      width: 50,
      height: 50,
    },
    
    container:{
      flex: 1,
    backgroundColor: "#FFBF00",
    alignItems: 'center',
    },
    container1: {
      backgroundColor: "#0000ff"
    },
    textdesign: {
      fontSize: 40,
      color: "#FFF",
      fontWeight: 'bold',
    }

});
export default App;

