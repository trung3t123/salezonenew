import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { CustomHeader } from '../../index';

const DATA = [
    { nameStore: 'Quán 1', addressStore: 'Địa chỉ 1', description: 'Mô tả 1', image_url: 'SaleZoneApp/icons/store.png' },
    { nameStore: 'Quán 2', addressStore: 'Địa chỉ 1, Địa chỉ 1, Địa chỉ 1, Địa chỉ 1', description: 'Mô tả 1 Mô tả 1 Mô tả 1 Mô tả 1 Mô tả 1 Mô tả 1 Mô tả 1', image_url: 'https://reactnative.dev/img/tiny_logo.png' },
    { nameStore: 'Quán 3', addressStore: 'Địa chỉ 1', description: 'Mô tả 1', image_url: 'https://reactnative.dev/img/tiny_logo.png' },
    { nameStore: 'Quán 4', addressStore: 'Địa chỉ 1', description: 'Mô tả 1', image_url: 'https://reactnative.dev/img/tiny_logo.png' },
    { nameStore: 'Quán 5', addressStore: 'Địa chỉ 1', description: 'Mô tả 1', image_url: 'https://reactnative.dev/img/tiny_logo.png' },
    { nameStore: 'Quán 6', addressStore: 'Địa chỉ 1', description: 'Mô tả 1', image_url: 'https://reactnative.dev/img/tiny_logo.png' },
    { nameStore: 'Quán 7', addressStore: 'Địa chỉ 1', description: 'Mô tả 1', image_url: 'https://reactnative.dev/img/tiny_logo.png' },
    { nameStore: 'Quán 8', addressStore: 'Địa chỉ 1', description: 'Mô tả 1', image_url: 'https://reactnative.dev/img/tiny_logo.png' },

]
function Item({ nameStore, addressStore, description, image_url }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image_url }} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>{nameStore}</Text>
                <Text style={styles.address}>{addressStore}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>

        </View>
    );
}
export class HighlySearchedStores extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item nameStore={item.nameStore} addressStore={item.addressStore} description={item.description} image_url={item.image_url} />}
                />
            </SafeAreaView>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 22,
    },
    photo: {
        height: 100,
        width: 100,
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'flex-start',
    },
    description: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    address: {
        fontSize: 15,
        fontStyle: 'italic',
    }
});

