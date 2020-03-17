import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { TextInput, BaseButton } from 'react-native-gesture-handler';
import { IMAGE } from '../../constants/images';
import { color } from 'react-native-reanimated';
import Axios from 'axios';
import { NativeRouter, Route, Link } from "react-router-native";

import App from '../../App';
import Register from './Register';


const styles = StyleSheet.create({
    top_blank: {
        flex: 5
    },
    Salezone_app: {
        fontSize: 18,
        fontFamily: "Averta-Regular",
        color: '#fbe2e0',
        flex: 5,
        alignItems: 'flex-end'
    },
    Sale_Zone_vn: {

        flex: 30,
        alignItems: "center"
    },
    login_fields: {
        fontSize: 10,
    },
    logo_login: {

    },
    Sale_Zone_vn_name: {
        marginTop: 20,
        fontSize: 25,
        color: '#fefeff',
        textTransform: 'uppercase',
    },

    login_input_fields: {
        flex: 30,
        alignItems: 'center'
    },
    phone_login_input: {
        width: 250,
        borderRadius: 25,
        backgroundColor: '#e42628',
        color: 'white'
    },
    password_login_input: {
        width: 250,
        borderRadius: 25,
        backgroundColor: '#e42628',
        color: 'white',
        marginTop: 10,
        marginBottom: 10,
    },
    submit_button: {
        backgroundColor: '#e8e9ff', alignItems: 'center',
        justifyContent: 'center', borderRadius: 25,
        paddingTop: 15,
        paddingBottom: 15,
        width: 250,
    },
    submit_text: {
        textTransform: 'uppercase',
        color: '#e42628',
    },
    forget_password: {
        color: '#e8e9ff',
    },
    register: {
        color: '#f79710',
    }

})



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: '',
            isLoggedIn: false,
            user: []
        };
    }

    submitLoginHandler = () => {

        const url = "http://103.102.46.103:3000/user_login";
        Axios.post(url, {
            phone: this.state.phone,
            password: this.state.password
        }).then(response => {
            console.log(response.data);
            if (response.data[0].phone === this.state.phone) {
                
                this.props.navigation.navigate('App');
                console.log(response.data[0].phone)
                console.log(this.state);
            }
        }).catch(error => {
            console.log(error);
        })
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
                            <TextInput secureTextEntry={true} value={this.state.password} name="password" onChangeText={(value) => this.setState({ password: value })} style={styles.password_login_input}
                                placeholder="  password" placeholderTextColor="#ede6e6"></TextInput>
                            {/* <Button title="Đăng Nhập" color="#e1e2fe" style={styles.submit_button}></Button> */}
                            <TouchableOpacity onPress={this.submitLoginHandler} >
                                <View style={styles.submit_button}>
                                    <Text style={styles.submit_text}>Đăng nhập</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.forget_password}>Quên mật khẩu</Text>
                            <TouchableOpacity><Text onPress={() => {this.props.navigation.navigate('Register')}} style={styles.register}>Đăng Ký</Text></TouchableOpacity>

                        </View>
                        <Text style={styles.Salezone_app}>SALEZONE APP</Text>
                    </ImageBackground>
                    
                </View>

            );
    }
}


export default Login;
