import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button, StyleSheet, TextInput, Picker } from 'react-native';
import { IMAGE } from '../../../constants/images';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NewProduct } from './NewProduct';
import {HotProduct} from './HotProduct';
const Tab = createMaterialTopTabNavigator();

export class ProductScreen extends Component {
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
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={IMAGE.ICON_BACK} style={{ margin: 5, marginLeft: 10, marginRight: 15, height: 30, width: 15 }}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22, color: 'white', flex: 4 }}>SẢN PHẨM</Text>
                   
                </View>
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
                <Tab.Navigator initialRouteName="Mới" lazyPlaceholder="Waiting..."
                    tabBarOptions={{
                        pressColor: 'gray', activeTintColor: 'red', inactiveTintColor: 'black', indicatorStyle: { backgroundColor: 'red' }, style: { marginTop: 20 }
                    }} >
                    <Tab.Screen name="Mới" component={NewProduct} />
                    <Tab.Screen name="Hot" component={HotProduct} />

                </Tab.Navigator>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ff0000',
        flexDirection: "row",
        alignItems: 'center',
        height:40
        
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2
    },
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


