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
        flex: 30,
        alignItems: 'center',
        alignContent: 'center'
    },
    Sale_Zone_vn_name: {
        fontSize: 25,
        marginTop: 10,
        color: '#fefeff',
        textTransform: 'uppercase',
    },
    login_input_fields: {
        flex: 55,

    },
    phone_login_input: {
        width: 250,
        marginBottom: 5,
        borderRadius: 25,
        backgroundColor: '#e42628',
        color: 'white',
    },
    password_login_input: {
        width: 250,
        marginBottom: 5,
        borderRadius: 25,
        backgroundColor: '#e42628',
        color: 'white',
    },
    name_register_input: {
        width: 250,
        marginBottom: 5,
        borderRadius: 25,
        backgroundColor: '#e42628',
        color: 'white',
    },
    register_button: {
        backgroundColor: '#e8e9ff', alignItems: 'center',
        justifyContent: 'center', borderRadius: 25,
        paddingTop: 15,
        paddingBottom: 15,
        width: 250,
    },
    return_login: {
        alignItems: 'center'
    },
    login: {
        marginTop: 5,
        color: '#f79710'
    },
    submit_text: {
        textTransform: 'uppercase',
        color: '#e42628',
    }

})




class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            password: '',
            confirmPassword: '',
            isLoggedIn: false,
            user: []
        };
    }

    submitRegisterHandler = () => {
        const { name, phone, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            Alert.alert('Thông báo', 'mật khẩu nhập lại không chính xác', [

                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ])
        }
        const url = "http://103.102.46.103:3000/user_register";
        Axios.post(url, { name: name, phone: phone, password: password }).
            then(res => {
                console.log(res);
                Alert.alert('Thông báo', 'Đăng ký thành công', [
                    {
                        text: 'OK', onPress: () => console.log('ok')
                    }
                ])
            }).
            catch(error => {
                console.log(error)
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
                            <TextInput value={this.state.name} name="name" onChangeText={(value) => this.setState({ name: value })} style={styles.name_register_input}
                                placeholder="  Tên tài khoản" placeholderTextColor="#ede6e6"></TextInput>
                            <TextInput value={this.state.phone} name="phone" onChangeText={(value) => this.setState({ phone: value })} style={styles.phone_login_input}
                                placeholder="  Số điện thoại" placeholderTextColor="#ede6e6"></TextInput>
                            <TextInput secureTextEntry={true} value={this.state.password} name="password" onChangeText={(value) => this.setState({ password: value })} style={styles.password_login_input}
                                placeholder="  Mật khẩu" placeholderTextColor="#ede6e6"></TextInput>
                            <TextInput secureTextEntry={true} value={this.state.confirmPassword} name="confirmPassword" onChangeText={(value) => this.setState({ confirmPassword: value })} style={styles.password_login_input}
                                placeholder="  Nhập lại mật khẩu" placeholderTextColor="#ede6e6"></TextInput>

                            <TouchableOpacity onPress={this.submitRegisterHandler} >
                                <View style={styles.register_button}>
                                    <Text style={styles.submit_text}>Đăng ký</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.return_login}>
                                <TouchableOpacity><Text onPress={() => { this.props.navigation.navigate('Login') }} style={styles.login}>Đăng Nhập</Text></TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.Salezone_app}>SALEZONE APP</Text>
                    </ImageBackground>

                </View>

            );
    }
}


export default Register;
