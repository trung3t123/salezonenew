import React, { Component } from 'react';
import { SafeAreaView, View, Image, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

const DATA = [
    { nameProduct: 'Bánh mì Bánh mì Bánh mì Bánh mì Bánh mì Bánh mì Bánh mì Bánh mì Bánh mì Bánh mì Bánh mì Bánh mì', priceProduct: '10000', description: 'Bánh mì đây Bánh mì Bánh mì Bánh mì Bánh mì Bánh mì ', imageProduct: 'public/images/banners/Quanlytaikhoancuahang.jpg' },
    { nameProduct: 'Bánh mì', priceProduct: '10000', description: 'Bánh mì đây', imageProduct: 'public/images/banners/Quanlytaikhoancuahang.jpg' },
    { nameProduct: 'Bánh mì', priceProduct: '10000', description: 'Bánh mì đây', imageProduct: 'public/images/banners/Quanlytaikhoancuahang.jpg' },
    { nameProduct: 'Bánh mì', priceProduct: '10000', description: 'Bánh mì đây', imageProduct: 'public/images/banners/Quanlytaikhoancuahang.jpg' },
    { nameProduct: 'Bánh mì', priceProduct: '10000', description: 'Bánh mì đây', imageProduct: 'public/images/banners/Quanlytaikhoancuahang.jpg' },
    { nameProduct: 'Bánh mì', priceProduct: '10000', description: 'Bánh mì đây', imageProduct: 'public/images/banners/Quanlytaikhoancuahang.jpg' },
    { nameProduct: 'Bánh mì', priceProduct: '10000', description: 'Bánh mì đây', imageProduct: 'public/images/banners/Quanlytaikhoancuahang.jpg' },
    { nameProduct: 'Bánh mì', priceProduct: '10000', description: 'Bánh mì đây', imageProduct: 'public/images/banners/Quanlytaikhoancuahang.jpg' },
    { nameProduct: 'Bánh mì', priceProduct: '10000', description: 'Bánh mì đây', imageProduct: 'public/images/banners/Quanlytaikhoancuahang.jpg' },
    { nameProduct: 'Bánh mì', priceProduct: '10000', description: 'Bánh mì đây', imageProduct: 'public/images/banners/Quanlytaikhoancuahang.jpg' },
    { nameProduct: 'Bánh mì', priceProduct: '10000', description: 'Bánh mì đây', imageProduct: 'public/images/banners/Quanlytaikhoancuahang.jpg' },

  

]
const urlServer = 'http://103.102.46.103:3000'
function Item({ nameProduct, priceProduct, description, imageProduct }) {
    return (
        <View style={styles.item}>
            <Image source={{ uri:urlServer + imageProduct.slice(6)}} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>{nameProduct}</Text>
                <Text style={styles.address}>{priceProduct}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>

        </View>
    );
}

export class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item nameProduct={item.nameProduct} priceProduct={item.priceProduct} description={item.description} imageProduct={item.imageProduct} />}
                    numColumns={2}
                   
                />
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ff0000',
        flexDirection: "row",
        alignItems: 'center',
        height: 40

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
    item: {
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
     title: {
        fontSize: 22,
    },
    photo: {
        height: 100,
        width: 165,
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
})


