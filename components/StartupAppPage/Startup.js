import { NativeRouter, Route, Link } from "react-router-native";
import Login from "../Login/Login";
import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { TextInput, BaseButton } from 'react-native-gesture-handler';
import { IMAGE } from '../../constants/images';
import { color } from 'react-native-reanimated';
import Register from "../Login/Register";
import StoreDetails from "../Store/StoreDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import App from "../../App";


const navOptionHandler = () => ({
    headerShown: false
})
const Stack = createStackNavigator();

class Startup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: []
        };
    }
    render() {
        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} options={navOptionHandler} />
                    <Stack.Screen name="Register" component={Register} options={navOptionHandler} />
                    <Stack.Screen name="App" component={App} options={navOptionHandler}/>
                    <Stack.Screen name="StoreDetails" component={StoreDetails} options={navOptionHandler}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Startup;