import React from 'react';
import {StackNavigator} from 'react-navigation';
import {StyleSheet, Text, View, Button, Image, AppRegistry} from 'react-native';
import Profile from '../AwesomeProject/Profile';

export default class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style = {styles.text}> Tauras </Text>
                <Image source = {require('./re.jpg')} style = {styles.image}/>
                <Button style = {styles.button} title="Profile" onPress={() => this.props.navigation.navigate('Profile')}/>
            </View>
        );
    }
}

const screens = StackNavigator({
    Home: {screen: App},
    Profile: {screen: Profile}
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:
    {
        top:20,
        width:200,
        height:300,
    },
    text:
    {
        fontSize:36,
        fontWeight: 'bold',
    },
    button:
    {
        top:30,
    }
});

AppRegistry.registerComponent('AwesomeProject', () => screens);