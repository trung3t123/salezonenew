import React, { Component } from 'react';
import { SafeAreaView, View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export class HotProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.container}>
                    <Text>sadsadas</Text>
                </View>
                <View style={styles.container}>
                    <Text>sadsadas</Text>
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
})


