import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { CustomHeader } from '../../index';

const DATA = [
    { nameStore: 'Quán 1', addressStore: 'Địa chỉ 1', description: 'Mô tả 1', image_url: 'public/images/banners/Quanlytaikhoancuahang.jpg' },
  

]
const urlServer = 'http://103.102.46.103:3000'
function Item({ nameStore, addressStore, description, image_url }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri:urlServer + image_url.slice(6)}} style={styles.photo} />
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

