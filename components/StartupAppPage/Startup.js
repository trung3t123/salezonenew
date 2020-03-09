import { NativeRouter, Route, Link } from "react-router-native";
import Login from "../Login/Login";
import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { TextInput, BaseButton } from 'react-native-gesture-handler';
import { IMAGE } from '../../constants/images';
import { color } from 'react-native-reanimated';
import Register from "../Login/Register";


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
            <NativeRouter>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/DangKy" component={Register} />
            </NativeRouter>
        );
    }
}

export default Startup;