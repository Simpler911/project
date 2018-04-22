import React from 'react';
import {StackNavigator} from 'react-navigation';
import {StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';

function api(){
    fetch('https://www.metaweather.com/api/location/834463/')
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        return myJson.consolidated_weather[0].the_temp;
      });
}

export default class Profile extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image
                    source = {require('./pend.png')}
                    style = {styles.image}/>
                <Text 
                    style = {styles.text}> Tauras
                </Text>
                <Text 
                    style = {styles.textt}> about me
                </Text>
                <Text style = {styles.temp}> I live in the City where the current temperature is </Text> 
                <TextInput 
                    style = {styles.input}
                    placeholder = "I still can not figure out how to make navigation work"
                    onChangeText={(text) => this.setState({text})} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:
    {
        top:50,
        right:-20,
        width:100,
        height:100,
    },
    text:
    {
        top: -20,
        left: 150,
        fontSize: 36,
        fontWeight: 'bold',
    },
    button:
    {
        top: 30,
    },
    input:
    {
        top: -120,
        height: 120
    },
    textt:
    {
        fontSize: 10,
        left: 10,
        top: 10,
        color: '#aaa'
    },
    temp:
    {
        top: 160,
        padding: 25,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});