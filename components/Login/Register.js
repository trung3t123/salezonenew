import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { TextInput, BaseButton } from 'react-native-gesture-handler';
import { IMAGE } from '../../constants/images';
import { color } from 'react-native-reanimated';
import Axios from 'axios';
import { NativeRouter, Route, Link } from "react-router-native";

import App from '../../App';


const styles = StyleSheet.create({
    top_blank: {
        flex: 5,
    },
    Sale_Zone_vn: {
        flex: 20,
        alignItems: 'center',
        alignContent: 'center'
    },
    Sale_Zone_vn_name: {
        fontSize: 25,
        color: '#fefeff',
        textTransform: 'uppercase',
    },

})




class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: '',
            isLoggedIn: false,
            user: []
        };
    }


    render() {
        const { isLoggedIn } = this.state;
        if (isLoggedIn)
            return (<App user={this.state.user}>

            </App>)
        else
            return (
                <View style={{
                    flex: 1,
                }}>
                    <ImageBackground source={IMAGE.IMAGE_BACKGROUND} style={{
                        flex: 1, alignItems: 'center',
                        flexDirection: 'column',
                    }}>
                        <View style={styles.top_blank}>
                        </View>
                        <View style={styles.Sale_Zone_vn}>
                            <Image style={styles.logo_login} source={IMAGE.LOGO_LOGIN}></Image>
                            <Text style={styles.Sale_Zone_vn_name}>SaleZone VN</Text>
                        </View>

                        <View style={styles.login_input_fields}>
                            <TextInput value={this.state.phone} name="phone" onChangeText={(value) => this.setState({ phone: value })} style={styles.phone_login_input}
                                placeholder="  Số điện thoại" placeholderTextColor="#ede6e6"></TextInput>

                            <Text style={styles.forget_password}>Quên mật khẩu</Text>
                            <Link style={styles.register} to="/"><Text style={styles.register}>Đăng Nhập</Text></Link>

                        </View>
                        <Text style={styles.Salezone_app}>SALEZONE APP</Text>
                    </ImageBackground>

                </View>

            );
    }
}


export default Register;
