import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button, StyleSheet, TextInput, Picker } from 'react-native';
import { CustomHeader } from '../../index';
import { IMAGE } from '../../constants/images';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NearStoreScreen } from '../Store/NearStoreScreen';
import { HighlySearchedStores } from '../Store/HighlySearchedStores';
import { Route } from 'react-router-dom';
import StoreDetails from '../Store/StoreDetails';
const Tab = createMaterialTopTabNavigator();
export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      location: ''
    };
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader isHome={true} navigation={this.props.navigation} />
        <View style={styles.inputContainer}>
          <Image source={IMAGE.ICON_SEARCH} style={{ width: 20, height: 20, marginTop: 20, marginLeft: 15 }} />
          <TextInput
            style={{ height: 40, marginTop: 10, fontSize: 15 }}
            placeholder="Tìm kiếm cửa hàng, sản phẩm mới ..."
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <Picker
            mode="dropdown"
            selectedValue={this.state.location}
            style={{ height: 60, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ location: itemValue })
            }>
            <Picker.Item label="Hà Nội" value="HN" />
            <Picker.Item label="TP. Hải Dương 1" value="HD1" />
            <Picker.Item label="TP. Hải Dương 2" value="HD2" />
            <Picker.Item label="TP. Hồ Chí Minh" value="HCM" />
          </Picker>
        </View>

        <Tab.Navigator initialRouteName="Xem nhiều" lazyPlaceholder="Waiting..."
          tabBarOptions={{
            pressColor: 'gray', activeTintColor: 'red', inactiveTintColor: 'black', indicatorStyle: { backgroundColor: 'red' }, style: { marginTop: 20 }
          }} >
          <Tab.Screen name="Xem nhiều" component={HighlySearchedStores} />
          <Tab.Screen name="Gần tôi" component={NearStoreScreen} />
        </Tab.Navigator>
      </SafeAreaView>

    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    height: 60,
    width: '96%',
    marginLeft: '2%',
    marginTop: 20,
    marginRight: '2%',
    borderWidth: 0.5,
    borderRadius: 20,
    flexDirection: 'row',
    borderColor: 'gray'
  }
})
