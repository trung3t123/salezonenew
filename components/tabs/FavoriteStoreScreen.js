import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';
import { CustomHeader } from '../../index';

export class FavoriteStoreScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader isHome={true} navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Favorite Store Screen!</Text>
          <TouchableOpacity>
            <Text>Go to Favorite Store detail</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

    );
  }
}
