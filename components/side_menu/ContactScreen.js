import React, { Component } from 'react';
import { SafeAreaView, View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IMAGE } from '../../constants/images'

export class ContactScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flex:2 }}>
                        <Image source={IMAGE.ICON_BACK} style={{ margin: 5, marginLeft: 10, marginRight: 15, height: 30, width: 15 }}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22, color: 'white', flex:4 }}>LIÊN HỆ</Text>
                    <TouchableOpacity style={{ flex:0.5,  margin: 5 }}>
                        <Image source={IMAGE.ICON_CONTACT} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>Công ty:</Text>
                    <Text style={styles.textInfo}> Khánh Company</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>Hotline:</Text>
                    <Text style={styles.textInfo}> 0123456798</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>Email:</Text>
                    <Text style={styles.textInfo}> khanhdayroi@gmail.com</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>Địa chỉ:</Text>
                    <Text style={styles.textInfo}> Số 1 Trần Nguyên Đán, Hà Nội, Số 1 Trần Nguyên Đán, Hà Nội, Số 1 Trần Nguyên Đán, Hà Nội</Text>
                    
                </View>
                <View style={styles.imageContainer}>
                <Image source={IMAGE.IMAGE_MAP} style={{width:370, height:250}} />
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
        height:40
        
    },
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
        alignItems:'center',

    },
    imageContainer: {
        flex: 5,
        flexDirection: 'row',
        padding: 5,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        
    },
    textTitle: {
        fontSize:22, 
        
    },
    textInfo: {
        fontSize:20, 
        
        color:'gray'
    }
})

