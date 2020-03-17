import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { CustomHeader } from '../CustomHeader';
import { IMAGE } from '../../constants/images';
import { useParams } from 'react-router-dom';


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





export function StoreDetails({ route, navigation })  {

    const { id } =  route.params
     
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={IMAGE.ICON_BACK} style={{ margin: 5, marginLeft: 10, marginRight: 15, height: 30, width: 15 }}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 22, color: 'white', flex: 4 }}>SẢN PHẨM</Text>

            </View>
            <Text>
                {id}
            </Text>

        </View >
    );
}

export default StoreDetails;