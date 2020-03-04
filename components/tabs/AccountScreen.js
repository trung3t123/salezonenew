import React, {Component} from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';
import {CustomHeader} from '../../index';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen} from './HomeScreen';
import { NearStoreScreen} from './NearStoreScreen'
const Tab = createMaterialTopTabNavigator();
export class AccountScreen extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={NearStoreScreen} />
          </Tab.Navigator>
        
          );
    }
}