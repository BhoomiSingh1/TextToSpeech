import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import * as Speech from 'expo-speech';
import {Header} from 'react-native-elements'

export default class App extends React.Component{
  constructor(){
    super();
    this.state ={
      text:''
    } 
  }
  speak =()=>{
    var thingsToSay = this.state.text
    Speech.speak(thingsToSay);
  }
  render(){
    return(
      <View>
       <Header backgroundColor={"#16697a"}
               centerComponent={{text:"Text to Speech",style:{color:"#eeeded", fontSize:20}}} />
       <TextInput style={styles.inputBox}
                  onChangeText={(t)=>{
                    this.setState({
                      text: t
                    })
                  }}/>
      <TouchableOpacity style= {styles.goButton}
                        onPress={
                         ()=>{
                          this.state.text!==''? this.speak():Alert.alert('Enter a word')
                         }
                        }>
        <Text>Play Sound</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  inputBox:{
    borderWidth: 4,
    marginTop: 100,
    width: '80%',
    height: 40,
    alignSelf: 'center',
    textAlign: 'center',
    outline:'none',
    borderColor:'#ffa62b',
    backgroundColor:'#f8f1f1'
  },
   goButton:{
    alignSelf:'center',
    backgroundColor:'#db6400',
    width: 80,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 40
  }
})