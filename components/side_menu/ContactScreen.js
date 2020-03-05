import React, {Component} from 'react';
import { SafeAreaView, View, Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {IMAGE} from '../../constants/images'
export class ContactScreen extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={styles.header}>
                <TouchableOpacity onPress= {() => this.props.navigation.goBack()}>
                    <Image source={IMAGE.ICON_BACK} style={{margin:10, height: 30, width:15}}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize:25, color: 'white'}}>LIÊN HỆ</Text>

                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#ff0000',
        flexDirection: "row",
        alignItems:'center'
    }
})

