import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';
import { IMAGE } from '../constants/images'

export class CustomHeader extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View style={{ flexDirection: 'row', height: 50, backgroundColor: 'red' }}>
        {
          (this.props.isHome) ?
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{ flex: 1, borderColor: 'red', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 30, height: 30 }} resizeMode="contain"
                source={IMAGE.ICON_MENU} />
            </TouchableOpacity>
            : null
        }

        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={IMAGE.ICON_LOGO} style={{ width: 150, height: 40 }}
             />
        </View>
        <View style={{ flex: 1, borderColor: 'red', borderWidth: 1 }}>
          {/* <Image style={{ width: 55, height: 55, tintColor: 'white' }}
                source={require('./icons/search.png')} /> */}
        </View>

      </View>
    )
  }
}