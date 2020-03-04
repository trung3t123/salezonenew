import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { CustomHeader } from '../../index';
const DATA = [
    { nameStore: 'Quán 1', addressStore: 'Địa chỉ 1', description: 'Mô tả 1' },
    { nameStore: 'Quán 2', addressStore: 'Địa chỉ 1', description: 'Mô tả 1' },
    { nameStore: 'Quán 3', addressStore: 'Địa chỉ 1', description: 'Mô tả 1' },
    { nameStore: 'Quán 4', addressStore: 'Địa chỉ 1', description: 'Mô tả 1' },
    { nameStore: 'Quán 5', addressStore: 'Địa chỉ 1', description: 'Mô tả 1' },
    { nameStore: 'Quán 6', addressStore: 'Địa chỉ 1', description: 'Mô tả 1' },
    { nameStore: 'Quán 7', addressStore: 'Địa chỉ 1', description: 'Mô tả 1' },
    { nameStore: 'Quán 8', addressStore: 'Địa chỉ 1', description: 'Mô tả 1' },
    { nameStore: 'Quán 9', addressStore: 'Địa chỉ 1', description: 'Mô tả 1' }
]
function Item({ nameStore, addressStore, description }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{nameStore}</Text>
            <Text style={styles.title}>{addressStore}</Text>
            <Text style={styles.title}>{description}</Text>

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
                    renderItem={({ item }) => <Item nameStore={item.nameStore} addressStore={item.addressStore} description={item.description} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

