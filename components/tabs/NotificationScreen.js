import React, {Component} from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';
import {CustomHeader} from '../../index';

export class NotificationScreen extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Notification" isHome={true}  navigation={this.props.navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Notification Screen!</Text>
              <TouchableOpacity>
                <Text>Go to Notification detail</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        
          );
    }
}