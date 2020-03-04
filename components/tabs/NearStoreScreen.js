import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';
import { CustomHeader } from '../../index';

export class NearStoreScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Near Store Screen!</Text>
          <TouchableOpacity>
            <Text>Go to Favorite Store detail</Text>
          </TouchableOpacity>
        </View>
      </>

    );
  }
}
